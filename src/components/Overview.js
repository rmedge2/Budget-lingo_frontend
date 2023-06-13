import { useContext, useEffect, useState } from "react"
import BalanceData from "./BalanceData"

const Overview = () => {

    const [open, setOpen] = useState(['flex', '+'])
    const [goalName, setGoalName] = useState('')
    const [goalAmount, setGoalAmount] = useState('')
    const [goalDeadline, setGoalDeadline] = useState(Date.now() + (7 * 24 * 60 * 60 * 1000))
    const [goalList, setGoalList]=useState([])
    
    

    const { totalMoney, setTotalMoney, baseLink, getUsers, usrId, commaAmount } = useContext(BalanceData)
    
    const switchOpen = () => {
        setOpen(open[0] == 'flex' ? ['none', '+'] : ['flex', '-'])
    }

    const fetchTotal = async() => {
        const usrDta = await getUsers()
        const curr = usrDta.find(u => u.id == usrId)
        setTotalMoney(curr.totalMoney?curr.totalMoney:0)
    }

    useEffect(() => {
        if (!totalMoney)
            fetchTotal()
    },[])
    
    return (
        <div>
            <h1>Total Money: ${commaAmount(totalMoney)}</h1>
            <div onClick={() => switchOpen()} className="add-goal">Add a goal {open[1]}</div>
            <div className="goal-input-box" style={{ display: open[0] }}>
                <input type="text" placeholder='input name' onInput={e=>setGoalName(e.target.value)}/>
                <input type="number" placeholder="input amount" onInput={e => setGoalAmount(e.target.value)} />
                <div></div>
                <input type="date" onChange={e=>setGoalDeadline(e.target.value)}/>
            </div>
            <div className="goal-display">

            </div>
        </div>
    )
}
export default Overview