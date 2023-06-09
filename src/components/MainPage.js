import { useContext, useState } from "react"
import BalanceData from "./BalanceData"

const MainPage = () => {

    const { logData, setLogs } = useContext(BalanceData)

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [time, setTime]=useState('')

    
    return (
        <div>

            <div id="log-area">
                {logData.map(log => (
                    <p key={log.name}>{log.name} {log.amount} {log.time}</p>
                ))}
            </div>
        </div>
    )
}
export default MainPage