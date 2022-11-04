import React from 'react'
import './Home.css'
// import User from '../components/User'
import {Helmet} from 'react-helmet-async'
import Overview from '../components/Overview'



export default function Home() {
  return (
    
    
    <div className='home'>
      <Helmet>
        <title>Repository</title>
        <meta name='description' content='taiwo ojo github profile'/>
        <link rel='canonical' href='/'/>
      </Helmet>

      <div className='user__page'>
       <Overview/>
    </div>

    </div>
  )
}
