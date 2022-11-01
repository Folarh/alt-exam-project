import React from 'react'
import './Searchbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export default function Searchbar() {
  return (
    <div className='searchbar'>
        <div className='input'>
        <input 
      type="text"
      placeholder='Find a repository...'
      />
        </div>

        <div className='btns'>
            
      <button className='searchbar__btn'>
        <span>Type</span>
        <ArrowDropDownIcon className="navbar__icon"/>
      </button>

      <button className='searchbar__btn'>
        <span>Language</span>
        <ArrowDropDownIcon className="navbar__icon"/>
      </button>

      <button className='searchbar__btn'>
        <span>Sort</span>
        <ArrowDropDownIcon className="navbar__icon"/>
      </button>

      <button className='special__btn'>
      <Inventory2Icon className='navbar__icon'/>
        <span>New</span>
        
      </button>
        </div>
     
    </div>
  )
}
