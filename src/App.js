import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';
import LoginPage from './Components/LogInPage';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import BalanceData from './Components/BalanceData'

import { createContext, useContext, useEffect, useState } from 'react';
import Overview from './Components/Overview';
import SpendingReport from './Components/SpendingReport';


function App() {

  const [currUser, setCurrUser]=useState('')
  const [logData, setLogs] = useState([])
  const [userData, setUsers]=useState([])
  const [totalMoney, setTotalMoney] = useState(0)
  const baseLink = 'http://localhost:3002/'
  const frontLink = 'http://localhost:3001/'
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

  useEffect(() => {
    const userId = localStorage.getItem('currUsername')
    console.log(userId)
    if (userId)
      setCurrUser(userId)
  },[userData])
  
  return (
    <div className="App">
      <BalanceData.Provider value={
        { logData, setLogs, getLogs,userData, setUsers, getUsers, convertDate, shorten, totalMoney, setTotalMoney, currUser, setCurrUser, baseLink, frontLink, usrId, commaAmount }
      }>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/mainpage' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/splashscreen' element={<SplashScreen />} />
          <Route path='/overview' element={<Overview/>}/>
          <Route path='/spending-report' element={<SpendingReport/>}/>
        </Routes>
      </BalanceData.Provider>
    </div>
  );
}

export default App;
