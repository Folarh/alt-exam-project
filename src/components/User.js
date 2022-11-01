//icons
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FlightLandTwoToneIcon from '@mui/icons-material/FlightLandTwoTone';
//styles
import './User.css'
//functions
import { useFetch } from '../hooks/useFetch'
import { useState } from 'react'

export default function User() {
  
  const [url, setUrl]= useState("https://api.github.com/users/FOLARH")

  const {data,error,loading}= useFetch(url)
  console.log(data)

  return (
    <div className='user'>
      <img src="https://avatars.githubusercontent.com/u/98031422?v=4" alt="pic" className='user__image'/>
      {error && <div>{error}</div>}
        {loading && <div>loading...</div>}
      <h2>{data && data.name}</h2>
      <h4 className='username'>{data.login}</h4>
      <h4>{data && data.bio}</h4>
      <button className='user__btn'>Edit profile</button>
      <h4>{data && data.followers} followers - {data && data.following} following </h4>

      <h4 className="loc"><RoomOutlinedIcon/>{data && data.location}</h4>
      <h4 className="loc"><FlightLandTwoToneIcon/>{data && data.twitter_username}</h4>
      <hr className="line__break"/>
      <h3>Highlights</h3>
      <StarOutlineIcon/>

      <hr className="line__break"/>
      <h3>Organizations</h3>
      <img src= 
"https://api.github.com/users/Folarh/orgs" alt='pix'/>
    </div>
  )
}
