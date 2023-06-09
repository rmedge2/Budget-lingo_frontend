import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LogInPage';
import SplashScreen from './components/SplashScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/splashscreen' element={<SplashScreen/>} />
      </Routes>
    </div>
  );
}

export default App;
