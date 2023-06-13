import { useContext, useState } from "react"
import BalanceData from "./BalanceData"

const Overview = () => {

    const [open, setOpen] = useState(['flex', '+'])
    const [goalName, setGoalName] = useState('')
    const [goalAmount, setGoalAmount] = useState('')
    const [goalDeadline, setGoalDeadline]=useState(Date.now()+(7*24*60*60*1000))
    

    const { totalMoney } = useContext(BalanceData)
    
    const switchOpen = () => {
        setOpen(open[0] == 'flex' ? ['none', '+'] : ['flex', '-'])
    }
    
    return (
        <div>
            <h1>Total Money: ${totalMoney}</h1>
            <div onClick={() => switchOpen()} className="add-goal">Add a goal {open[1]}</div>
            <div className="goal-input-box" style={{ display: open[0] }}>
                <input type="text" placeholder='input name' onInput={e=>setGoalName(e.target.value)}/>
                <input type="number" placeholder="input amount" onInput={e=>setGoalAmount(e.target.value)}/>
                <input type="date" onChange={e=>setGoalDeadline(e.target.value)}/>
            </div>
            
        </div>
    )
}
export default Overview