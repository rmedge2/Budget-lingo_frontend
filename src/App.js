import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';
import LoginPage from './Components/LogInPage';
import SplashScreen from './Components/SplashScreen';
import BalanceData from './Components/BalanceData'

import { createContext, useContext, useEffect, useState } from 'react';
import Overview from './Components/Overview';


function App() {


  const [logData, setLogs] = useState([{name:'', amount: null, time:''}])
  
  return (
    <div className="App">
      <BalanceData.Provider value={{ logData, setLogs }}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/mainpage' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/splashscreen' element={<SplashScreen />} />
          <Route path='/overview' element={<Overview/>}/>
        </Routes>
      </BalanceData.Provider>
    </div>
  );
}

export default App;
