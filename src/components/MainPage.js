import { useContext, useState } from "react"
import BalanceData from "./BalanceData"

const MainPage = () => {

    const { logData, setLogs } = useContext(BalanceData)

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [time, setTime] = useState(Date.now())
    
    const clearData = () => {
        setName('');
        setAmount('');
        setTime(Date.now())
    }

    const handleClick = () => {
        const newLog = {
            name: name,
            amount: amount,
            time: time
        }
        setLogs([...logData, newLog])
        clearData()
    }

    const convertDate = date => {
        if (!date)
            return ''
        const newDate = Date(date)
        const dateLine=[...newDate.split(' ')].splice(1,3)
        return dateLine.join(' ')
    }
    
    return (
        <div>
            <input type="text" placeholder="input name" value={name} onInput={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder="input amount" value={amount} onInput={(e)=>setAmount(e.target.value)}/>
            <input type="date" />
            <button onClick={()=>handleClick()}>Submit</button>
            <div id="log-area">
                {logData.map(log => (
                    <p key={log.name}>{log.name} {log.amount} {convertDate(log.time)}</p>
                ))}
            </div>
        </div>
    )
}
export default MainPage