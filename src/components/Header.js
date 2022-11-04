import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import WidthNormalIcon from '@mui/icons-material/WidthNormal';


export default function Header() {
  return (
    <div className='header'>
      <div className='header__overview' >
      <WidthNormalIcon className='header__icon'/>
       
        <Link to="/overview"><span >Overview</span></Link>
      </div>

      <div className='header__overview' >
      <Inventory2Icon className='header__icon'/>
        
        <Link to="/myrepo"><span  >Repository</span></Link>
      </div>

      
    </div>
  )
}