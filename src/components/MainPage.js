import './MainPage.css'
import { useContext, useEffect, useState } from "react"
import BalanceData from "./BalanceData"
import Log from './Log'

const MainPage = () => {

    const { logData, setLogs, getLogs } = useContext(BalanceData)

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [time, setTime] = useState(Date.now())
    const [err, setError]=useState('')
    
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
        if (!name && !amount)
            return setError('No Data!')
        if (!name) {
            clearData()
            return setError('Missing Name!')
        }
            
        if (!amount) {
            clearData()
            return setError('Missing Amount!')
        }
            
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

    

    const showData = async () => {
        const data = await getLogs()
        setLogs(data)
    }
    
    useEffect(() => {
        showData()
    }, [])
    


    return (
        <div className='main-page-content'>
            <div className='submit-area'>
                <input type="text" placeholder="input name" value={name} onInput={(e)=>setName(e.target.value)}/>
                <input type="number" placeholder="input amount" value={amount} onInput={(e)=>setAmount(e.target.value)}/>
                <input type="date" />
                <button className='submit-button' onClick={() => handleClick()}>Submit</button>
                <p style={{color:'red'}}>{err}</p>
            </div>
            
            <div id="log-area">
                {logData?logData.map(log => (
                    <Log key={log.time}  name={log.name} amount={log.amount} time={log.time}/>
                )):null}
            </div>
        </div>
    )
}
export default MainPage