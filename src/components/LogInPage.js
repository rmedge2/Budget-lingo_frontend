import { useContext, useEffect, useState } from 'react'
import BalanceData from './BalanceData'
import './LoginPage.css'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [currUser, setCurrUser]=useState('')
    const [err, setErr] = useState('')
    

    const{getUsers, setUsers, userData}=useContext(BalanceData)
    
    const checkCredentials = () => {
        console.log(userData)
        let user = userData.find(user => user.userName == username)
        if (!user)
            return setErr('no such user!')
        if (user.passWord != password)
            return setErr('wrong password!')
        localStorage.setItem('currentUser', user.id)
        setErr(`logged as ${username}!`)
        console.log('USER', user)
    }

    const addUser = async (data) => {
        if (!username)
            return setErr('enter username!')
        if (!password)
            return setErr('enter password!')
        if (userData.find(user => user.userName == username))
            return setErr('username taken!')
        const jsonData = JSON.stringify(data)
        const currentUser= await fetch('http://localhost:3000/users',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: jsonData
            }
        )
        setCurrUser(currentUser)   
        setErr('registered!')
    }

    const fetchUsers = async () => {
        let data = await getUsers()
        setUsers(data)
    }

    useEffect(() => {
        fetchUsers();
    }, [])
    useEffect(() => {
        fetchUsers()
        console.log(currUser)   
    },[currUser])
    
    return (
        <div className="login-page">
            <h1>login or Register</h1>
            <div className="username-box">
                <div>
                    Username:
                </div>
                <input type="text" onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className="password-box">
                <div>
                    Password: 
                </div>
                <input type="text" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button onClick={() => checkCredentials()}>Log in</button>
            <button onClick={() => addUser({userName:username, passWord:password})}>Register</button>
            {err}
        </div>
    )
}
export default LoginPage