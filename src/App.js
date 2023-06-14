import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LogInPage';
import SplashScreen from './components/SplashScreen/SplashScreen';
import BalanceData from './components/BalanceData'

import { createContext, useContext, useEffect, useState } from 'react';
import Overview from './components/Overview';
import SpendingReport from './components/SpendingReport';


function App() {

  const [currUser, setCurrUser]=useState('')
  const [logData, setLogs] = useState([])
  const [userData, setUsers]=useState([])
  const [totalMoney, setTotalMoney] = useState(0)
  const baseLink = 'https://budget-lingo-database.onrender.com/'
  const frontLink = 'https://budget-lingo.onrender.com/'
  const usrId = localStorage.getItem('currentUser')
  
  const getLogs = () => {
    return fetch(`${baseLink}logs`)
      .then(res => res.json())
  }

  const getUsers = () => {
    return fetch(`${baseLink}users`)
      .then(res => res.json())
  }

  const convertDate = date => {
    if (!date)
      return ''
    
    let newDate = new Date(parseInt(date))
    newDate=newDate.toString()
    const dateLine=[...newDate.split(' ')].splice(1,3)
    return dateLine.join(' ')
  }

  const shorten = words => {
        return words.length<15?words:`${words.substring(0,15)}...`
  }

  const commaAmount = val => {
    let offset=0;
    if (`${val}`.length < 3)
      return val
    let splv = (`${val}`.split('')).reverse()
    if (splv[splv.length-1] == '-')
      offset=-1
    let lim=splv.length
    for (let i = 1; i < lim + 1+offset; i++) {
      if ((i % 4 == 0) && i != 0)
        splv.splice(i - 1, 0, ',')
      lim=splv.length
    }
    return (splv.reverse()).join('')
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

  useEffect(() => {
    const userId = localStorage.getItem('currUsername')
    if (userId)
      setCurrUser(userId)
  },[userData])
  
  return (
    <div className="App">
      <BalanceData.Provider value={
        { logData, setLogs, getLogs,userData, setUsers, getUsers, convertDate, shorten, totalMoney, setTotalMoney, currUser, setCurrUser, baseLink, frontLink, usrId, commaAmount, showData }
      }>
    
        <Header />
        <div className='main'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/mainpage' element={<MainPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/splashscreen' element={<SplashScreen />} />
            <Route path='/overview' element={<Overview/>}/>
            <Route path='/spending-report' element={<SpendingReport/>}/>
          </Routes>

        </div>
        
      </BalanceData.Provider>
    </div>
  );
}

export default App;
