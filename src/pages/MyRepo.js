import React from 'react'
//styles
import './MyRepo.css'

//icons

import { useFetch } from '../hooks/useFetch'
import { useState } from 'react'
import Pagination from '../components/Pagination';
import RepoList from '../components/RepoList';
import {Helmet} from 'react-helmet-async'



export default function MyRepo() {
  const [currentPage, setCurrentPage]=useState(1)
  const [postPerPage, setPostPerPage]=useState(3)
  const [url, setUrl]= useState("https://api.github.com/users/FOLARH/repos")

  const prevPage = ()=>{
    if (currentPage <=1){
      return currentPage;
    }
    setCurrentPage((currentPage)=>currentPage -1)
  }

  const nextPage = ()=>{
    const pageLength = data.length/postPerPage
    if (currentPage < pageLength-1){
      setCurrentPage((currentPage)=>currentPage +1)
    }
    
  }

  const {data,error,loading}= useFetch(url)

 // Get current post
const indexOfLastPost = currentPage * postPerPage;
const indexOfFirstPost = indexOfLastPost- postPerPage;
const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

// paginate  function
const paginate = (pageNumber)=>setCurrentPage(pageNumber);

  return (
    <div className='my__repository'>
       <Helmet>
        <title>Repository List</title>
        <meta name='description' content='taiwo ojo repository list'/>
        <link rel='canonical' href='/'/>
      </Helmet>

       {error && <div>{error}</div>}
        {loading && <div>loading...</div>}

      <RepoList data={currentPosts} loading={loading} error={error}/>
      <Pagination postPerPage={postPerPage} totalPosts={data.length}
       paginate={paginate} prevPage={prevPage} nextPage={nextPage}/>

      
    </div>
    
   
  )
}
