import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import BalanceData from "./BalanceData"

const Header = () => {

    const {currUser}=useContext(BalanceData)

    let link = {
        padding: '0px 10px',
        textDecoration:'none'
    }

    useEffect(() => {
        if(currUser)
            console.log(currUser.userName)  
    },[currUser])
    
    return (
        <div>
             <nav className='link-box'>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/splashscreen'>About</NavLink>
                <NavLink style={link} className={({ isActive }) => isActive ? "active-link" : "inactive-link"} to='/login'>{ currUser?currUser.userName:'Log In'}</NavLink>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/mainpage'>Home</NavLink>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/overview'>Overview</NavLink>
            </nav>
        </div>
    )
}
export default Header