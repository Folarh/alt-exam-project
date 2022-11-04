import React from 'react'
import {Link} from "react-router-dom"

import './RepoList.css'


export default function RepoList({data}) {
  return (
    <div className='repolist'>
       {data && data.map((repo)=>(
        <div key={repo.id} className="repositories">
            <div className='left'>
              <Link to={`/repos/${repo.full_name}`} >
              <h2 className='my__repository__header'>{repo.name}</h2>
               </Link>
               </div>
               </div>
      ))}
      </div>
   
  )
}
