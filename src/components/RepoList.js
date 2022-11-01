import React from 'react'
import {Link} from "react-router-dom"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function RepoList({data}) {
  return (
    <div>
         {data && data.map((repo)=>(
        <div key={repo.id} className="repositories">
            <div className='left'>
              <Link to={`/repos/${repo.full_name}`} >
              <h2 className='my__repository__header'>{repo.name}</h2>
              
              </Link>
           
            <button className='my__repository__visibiity'>{repo.visibility}</button>
            
            </div>

            <div className='right'>
                <div className='right__btn'>
                <StarBorderIcon/>
                <p>star</p>
                <ArrowDropDownIcon/>
                </div>
                
            </div>
            
            
        </div>
      ))}


    </div>
   
  )
}
