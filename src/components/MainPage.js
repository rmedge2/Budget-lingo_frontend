import { useContext, useEffect, useState } from "react"
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

    const postData = data => {
        const jsonData = JSON.stringify(data)
        console.log(jsonData)
        fetch('http://localhost:3000/logs',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: jsonData
            }
        )
    }

    const handleClick = () => {
        const newLog = {
            userId:1,
            name: name,
            amount: amount,
            time: time
        }
        setLogs([...logData, newLog])

        postData(newLog)

        clearData()
    }

    const convertDate = date => {
        if (!date)
            return ''
        const newDate = Date(date)
        const dateLine=[...newDate.split(' ')].splice(1,3)
        return dateLine.join(' ')
    }
    
    useEffect(() => {
        
    }, [logData])
    


    return (
        <div>
            <input type="text" placeholder="input name" value={name} onInput={(e)=>setName(e.target.value)}/>
            <input type="number" placeholder="input amount" value={amount} onInput={(e)=>setAmount(e.target.value)}/>
            <input type="date" />
            <button onClick={()=>handleClick()}>Submit</button>
            <div id="log-area">
                {logData.map(log => (
                    <p key={log.name}>{log.name} {log.amount} {log.time}</p>
                ))}
            </div>
        </div>
    )
}
export default MainPage