import { useContext, useEffect, useState } from 'react'
import BalanceData from './BalanceData'
import './LoginPage.css'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [err, setErr] = useState('')
    

    const{getUsers, setUsers, userData, currUser, setCurrUser, baseLink, frontLink}=useContext(BalanceData)
    
    const checkCredentials = () => {
        let user = userData.find(user => user.userName == username)
        if (!user)
            return setErr('no such user!')
        if (user.passWord != password)
            return setErr('wrong password!')
        localStorage.setItem('currentUser', user.id)
        localStorage.setItem('currUsername', user.userName)
        setCurrUser(user)
        setErr(`logged as ${username}!`)
        // window.location.href=`${frontLink}mainpage`
    }

    const addUser = async (data) => {
        if (!username)
            return setErr('enter username!')
        if (!password)
            return setErr('enter password!')
        if (userData.find(user => user.userName == username))
            return setErr('username taken!')
        const jsonData = JSON.stringify(data)
        const currentUser= await fetch(`${baseLink}users`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: jsonData,
            },
        )
        console.log(currentUser)
        // window.location.reload()
        // setCurrUser(currentUser)   
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
    },[])
    
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
            <div className="login-register">
                <button onClick={() => checkCredentials()}>Log in</button>
                <button onClick={() => addUser({userName:username, passWord:password})}>Register</button>
            </div>
            {err}
        </div>
    )
}
export default LoginPage