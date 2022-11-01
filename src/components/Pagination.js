import React from 'react'
import './Pagination.css'
import {Link } from 'react-router-dom'

export default function Pagination({postPerPage, totalPosts, paginate, prevPage, nextPage}) {
    const pageNumbers= []
    for(let i=1;  i<= Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <nav>
    <ul className='page'>
    <Link className='move' onClick={()=>prevPage()} to="#">
         Prev
        </Link>
      {pageNumbers.map((number)=>(
        <li key={number} className="page-item">
         
            <Link to="#" onClick={()=>paginate(number)} className="link">{number}</Link>
            
          
        </li>
      ))}
      <Link className='move' onClick={()=>nextPage()} to="#">
          Next
        </Link>
      
    </ul>
   </nav>
  )
}
