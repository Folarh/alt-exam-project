import React from 'react'
import './Details.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ForkLeftOutlinedIcon from '@mui/icons-material/ForkLeftOutlined';

export default function Details() {
  return (
    <div className='details__page'>
      <div className='about'>
        <h2>About</h2>
        <p>no description, websites, or topics about this pages</p>

        <div className='details__icon'>
            <MenuBookIcon/>
            <p>ReadMe</p>
        </div>

        <div className='details__icon'>
            <StarOutlineIcon/>
            <p>0 stars</p>
        </div>

        <div className='details__icon'>
            <RemoveRedEyeOutlinedIcon/>
            <p>1 watching</p>
        </div>

        <div className='details__icon'>
            <ForkLeftOutlinedIcon/>
            <p>0 forks</p>
        </div>
      </div>
      <hr/>
      <div className='release'>
        <h1>Releases</h1>
        <p>No release published</p>
        <h4 className='green'>CReate a new release</h4>
      </div>
      <hr/>
      <div className='packages'>
        <h1>Packages</h1>
        <p>No release published</p>
        <h4 className='blue'>CReate a new package</h4>
      </div>
    </div>
  )
}
