import React from 'react'
import MyRepo from '../pages/MyRepo'
import './Repository.css'
import Searchbar from './Searchbar'

export default function Repository() {
  return (
    <div className='repository'>
   <Searchbar/>
   <MyRepo/>

    </div>
  )
}
