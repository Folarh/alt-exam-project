
import {Link} from "react-router-dom"
import "./Navbar.css"
import Logo from '../assets/github-logo.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported';

export default function Navbar() {
  return (
    <nav className="navbar">
        
        
        <div className="navbar__left">
            <img src={Logo} alt="navbar-logo" className='navbar__logo'/>
            
            <div className="navbar__input">
            <input
            type="text"
            placeholder="Search or jump to..."
            className='navbar__input'
            />
            <BrowserNotSupportedIcon className="navbar__input__icon"/>
            </div>
           
        </div>

        
         <div className="navbar__center">
            
             <Link to="/">Pulls</Link>
             <Link to="/">Issues</Link>
             <Link to="/" >Market Place </Link>
             <Link to="/" >Explore</Link>
        </div> 

        
        <div className="navbar__right">
            <NotificationsNoneIcon className="navbar__icon"/>
            <AddIcon className="navbar__icon"/>
            <ArrowDropDownIcon className="navbar__icon"/>
            <div className="nav__avatar">
                <AccountCircleIcon className="navbar__icon"  />
                
                
                <ArrowDropDownIcon className="navbar__icon"/>
            </div>
            

        </div> 

    </nav>
  )
}