
import {Link} from "react-router-dom"
import "./Navbar.css"
import Logo from '../assets/github-logo.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Navbar() {
  return (
    <nav className="navbar">
        
        
        <div className="navbar__left">
            <img src={Logo} alt="navbar-logo" className='navbar__logo'/>
             </div>

        
        <div className="navbar__right">
            <NotificationsNoneIcon className="navbar__icon"/>
            <AddIcon className="navbar__icon"/>
            <ArrowDropDownIcon className="navbar__icon"/>
           <AccountCircleIcon className="navbar__icon"  />
                 <ArrowDropDownIcon className="navbar__icon"/>

        </div> 

    </nav>
  )
}