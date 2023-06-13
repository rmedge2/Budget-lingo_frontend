import { useContext, useEffect, useState } from "react"
import BalanceData from "./BalanceData"
import './Overview.css'

const Overview = () => {

    const [open, setOpen] = useState(['flex', '+'])
    const [goalName, setGoalName] = useState('')
    const [goalAmount, setGoalAmount] = useState('')
    const [goalDeadline, setGoalDeadline] = useState(Date.now() + (7 * 24 * 60 * 60 * 1000))
    const [goalList, setGoalList]=useState([])
    
    

    const { totalMoney, setTotalMoney, baseLink, getUsers, usrId, commaAmount, logData, showData } = useContext(BalanceData)
    
    const switchOpen = () => {
        setOpen(open[0] == 'flex' ? ['none', '+'] : ['flex', '-'])
    }

    const fetchTotal = async() => {
        const usrDta = await getUsers()
        const curr = usrDta.find(u => u.id == usrId)
        setTotalMoney(curr.totalMoney?curr.totalMoney:0)
    }

    const addGoal = (data) => {
        const jsonData=JSON.stringify(data)
        fetch(`${baseLink}goals`,
            {
            method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            body: jsonData,
        })
    }

    const handleAdd = () => {
        if (!goalName)
            return console.log('no name')
        if (!goalAmount)
            return console.log('no amount')
        if (!goalDeadline)
            return console.log('no deadline')
        if (!usrId)
            return console.log('no usr')
        addGoal({userId:usrId, name:goalName, amount:goalAmount, deadline:goalDeadline})
        
    }

    const handleDeadline = time => {
        const timeInt=new Date(time)
        setGoalDeadline(timeInt.getTime())
    }

    useEffect(() => {
        if (!totalMoney)
            fetchTotal()
        if (!logData)
            showData()
    },[])
    
    return (
        <div className="goals-content">
            <h1>Total Money: ${commaAmount(totalMoney)}</h1>
            <div onClick={() => switchOpen()} className="add-goal">Add a goal {open[1]}</div>
            <div className="goal-input-box" style={{ display: open[0] }}>
                <input type="text" placeholder='input name' onInput={e=>setGoalName(e.target.value)}/>
                <input type="number" placeholder="input amount" onInput={e => setGoalAmount(e.target.value)} />
                <div>Enter Deadline:</div>
                <input type="date" onChange={e => handleDeadline(e.target.value)} />
                <button onClick={()=>handleAdd()}>Submit</button>
            </div>
            <div className="goal-display">

            </div>
        </div>
    )
}
export default Overview