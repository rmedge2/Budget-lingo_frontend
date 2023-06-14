import { useContext, useEffect, useState } from "react"
import BalanceData from "./BalanceData"
import './Overview.css'

const Overview = () => {

    const [open, setOpen] = useState(['none', '+'])
    const [goalName, setGoalName] = useState('')
    const [goalAmount, setGoalAmount] = useState('')
    const [goalDeadline, setGoalDeadline] = useState(Date.now() + (7 * 24 * 60 * 60 * 1000))
    const [goalList, setGoalList]=useState([])
    
    

    const { totalMoney, setTotalMoney, baseLink, getUsers, usrId, commaAmount, logData, showData, convertDate } = useContext(BalanceData)
    
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
        const newGoal={ userId: usrId, name: goalName, amount: goalAmount, deadline: goalDeadline }
        addGoal(newGoal)
        setGoalList([newGoal, ...goalList])
        
    }

    const handleDeadline = time => {
        const timeInt=new Date(time)
        setGoalDeadline(timeInt.getTime())
    }

    const fetchGoals = async() => {
        const goals = await fetch(`${baseLink}goals`).then(res => res.json());
        const userGoals=goals.filter(logs => logs.userId == usrId)
        setGoalList(userGoals)
    }

    const getAdditions = (l,t) => {
        let total = [...logData.filter(ld => ld.name == l && ld.amount < 0)].reduce((sum, a) => sum + a.amount, 0)
        total=Math.abs(total)
        if (!total)
            return 0
        const percent=Math.floor((total/t)*100)
        return `${commaAmount(total)} (${percent}%)`
    }


    useEffect(() => {
        if (!totalMoney)
            fetchTotal()
        // if (!logData)
            showData()
        // if (!goalList)
            fetchGoals()
    },[])
    
    useEffect(() => {

    }, [goalList])

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
                {goalList ? goalList.map((goal, index) => (
                    <div key={index} className="goal-log">
                        <div className="name-amount-goal">
                            <h1>{goal.name}</h1>
                            <h6>${commaAmount(goal.amount)}</h6>
                        </div>
                        <div className="deadline-amount">
                            <h4>{convertDate(goal.deadline)}</h4>
                            <h6>${getAdditions(goal.name, goal.amount)}</h6>
                        </div>
                        
                </div>)):null}
            </div>
        </div>
    )
}
export default Overview