import './MainPage.css'
import { useContext, useEffect, useState } from "react"
import BalanceData from "./BalanceData"
import Log from './Log'
import LineGraph from './LineGraph'

const MainPage = () => {

    const { logData, setLogs, getLogs, shorten, totalMoney, setTotalMoney, baseLink, setCurrUser } = useContext(BalanceData)

    const [open, setOpen] = useState(['none', '+'])


    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [time, setTime] = useState(Date.now())
    const [err, setError] = useState('')

    const [runTotals, setRunningTotals] = useState([])

    const clearData = () => {
        setName('');
        setAmount('');
        setTime(Date.now())
        setCategory('')
    }

    const postData = data => {
        const jsonData = JSON.stringify(data)
        fetch(`${baseLink}logs`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: jsonData,
            }
        )
    }

    const handleClick = () => {
        const usrId = localStorage.getItem('currentUser')
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
            userId: usrId,
            name: name,
            amount: amount,
            expenseCategory: category,
            time: time
        }
        setLogs([newLog, ...logData])

        postData(newLog)

        clearData()
    }


    const showData = async () => {
        const data = await getLogs()
        const usrId = localStorage.getItem('currentUser')
        const logss = [...data.reverse()].filter(logs => logs.userId == usrId);
        const logByTime = logss.sort((a, b) => {
            return b.time - a.time
        });

        setLogs(logByTime)
    }


    const switchOpen = () => {
        setOpen(open[0] == 'flex' ? ['none', '+'] : ['flex', '-'])
    }

    const drawdata = (startFunds) => {
        let runningTotals = [startFunds ? startFunds : 0];
        let thistotal = 0;
        for (let i = logData.length; i >= 0; i--) {
            if (i < logData.length)
                thistotal = parseInt(runningTotals[0]) + parseInt(logData[i].amount);
            runningTotals.unshift(thistotal)
        }
        setRunningTotals(runningTotals)
        setTotalMoney(runningTotals[0])
    }

    const handleTime = (val) => {
        const dt = new Date(val)
        console.log(dt.getTime())
        setTime(dt.getTime())
    }


    useEffect(() => {
        showData()

    }, [])

    useEffect(() => {
        drawdata()
    }, [logData])

    const categoryOptions = [
        {
            label: "Select Category",
            value: "Select Category"
        },
        {
            label: "Food",
            value: "Food"
        },
        {
            label: "Rent",
            value: "Rent"
        },
        {
            label: "Groceries",
            value: "Groceries"
        },
        {
            label: "Transportation",
            value: "Transportation"
        },
        {
            label: "Bills",
            value: "Bills"
        },
        {
            label: "Entertainment",
            value: "Entertainment"
        },
        {
            label: "Miscellaneous",
            value: "Miscellaneous"
        }]

    const handleOptionChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className='main-page-content'>
            <LineGraph />

            <h1>Total: ${totalMoney}</h1>
            <div className='add-item' onClick={() => switchOpen()}>Add an item {open[1]}</div>
            <div className='submit-area' style={{ display: open[0] }}>
                <input type="text" placeholder="input name" value={name} onInput={(e) => setName(e.target.value)} />
                <input type="number" placeholder="input amount" value={amount} onInput={(e) => setAmount(e.target.value)} />
                <select value={category} onChange={(e) => handleOptionChange(e)}>
                    {categoryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <input type="date" onChange={e => handleTime(e.target.value)} />
                <button className='submit-button' onClick={() => handleClick()}>Submit</button>
                <p style={{ color: 'red' }}>{err}</p>
            </div>

            <div id="log-area">
                {logData ? logData.map((log, index) => (
                    <Log className='single-log' key={log.created_at} name={log.name} amount={log.amount} time={log.time} total={runTotals[index]} />
                )) : null}
            </div>
        </div>
    )
}
export default MainPage