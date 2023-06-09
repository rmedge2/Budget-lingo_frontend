import { NavLink } from "react-router-dom"

const Header = () => {

    let link = {
        padding: '0px 10px',
        textDecoration:'none'
    }
    
    return (
        <div>
             <nav className='link-box'>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/splashscreen'>About</NavLink>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/login'>Log In</NavLink>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/mainpage'>Home</NavLink>
                <NavLink style={link} className={({isActive}) => isActive ? "active-link" : "inactive-link"} to='/overview'>Overview</NavLink>
            </nav>
        </div>
    )
}
export default Header