import './MainPage.css'
import { useContext, useEffect, useState } from "react"
import BalanceData from "./BalanceData"
import Log from './Log'

const MainPage = () => {

    const { logData, setLogs, getLogs, shorten, totalMoney, setTotalMoney } = useContext(BalanceData)

    const [open, setOpen] = useState(['none', '+'])
    

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [time, setTime] = useState(Date.now())
    const [err, setError] = useState('')
    
    const [runTotals, setRunningTotals]=useState([])
    
    const clearData = () => {
        setName('');
        setAmount('');
        setTime(Date.now())
    }

    const postData = data => {
        const jsonData = JSON.stringify(data)
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
        const usrId=localStorage.getItem('currentUser')
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
        if (!usrId)
            return setError('Not logged in!')    
        const newLog = {
            userId:usrId,
            name: name,
            amount: amount,
            time: time
        }
        setLogs([newLog,...logData])

        postData(newLog)

        clearData()
    }
    

    const showData = async () => {
        const data = await getLogs()
        const usrId=localStorage.getItem('currentUser')

        setLogs([...data.reverse()].filter(logs=>logs.userId==usrId))
    }
    

    const switchOpen = () => {
        setOpen(open[0]=='flex'?['none','+']:['flex','-'])
    }

    const drawdata = (startFunds) => {
        let runningTotals = [startFunds?startFunds:0];
        for (let i = logData.length; i >= 0; i--){
            if (i < logData.length)
                runningTotals.unshift(runningTotals[0]+logData[i].amount)
        }
        setRunningTotals(runningTotals)
        setTotalMoney(runningTotals[0])
    }

    
    useEffect(() => {
        showData()

    }, [])

    useEffect(() => {
        drawdata()
    }, [logData])
    
    return (
        <div className='main-page-content'>
            
            <h1>Total: ${totalMoney}</h1>
            <div className='add-item' onClick={() => switchOpen()}>Add an item {open[1]}</div>
            <div className='submit-area' style={{display:open[0]}}>
                <input type="text" placeholder="input name" value={name} onInput={(e)=>setName(e.target.value)}/>
                <input type="number" placeholder="input amount" value={amount} onInput={(e)=>setAmount(e.target.value)}/>
                <input type="date" />
                <button className='submit-button' onClick={() => handleClick()}>Submit</button>
                <p style={{color:'red'}}>{err}</p>
            </div>
            
            <div id="log-area">
                {logData?logData.map((log, index) => (
                    <Log className='single-log' key={log.time} name={log.name} amount={log.amount} time={log.time} total={runTotals[index]} />
                )):null}
            </div>
        </div>
    )
}
export default MainPage