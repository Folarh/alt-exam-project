import {useParams} from 'react-router-dom'
import Details from '../components/Details';
import { useFetch } from '../hooks/useFetch'


import { Helmet } from 'react-helmet-async';
import './ViewRepo.css'

export default function ViewRepo() {
    const {full_name}=useParams()
    const url= "https://api.github.com/repos/FOLARH/"+ full_name;
    const {data, loading, error}= useFetch(url)

  return (
    <div className='repo__info'>
     
        {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className='repo__left'>
          {/* <h1 className='heading'>{full_name}</h1> */}
        
 </div>
         
      )}

      <div className='more'>
     
      <Helmet>
        <title>Repository information</title>
        <meta name='description' content='taiwo ojo github profile'/>
        <link rel='canonical' href='/ViewRepo'/>
      </Helmet>
        <div className='more__details'>
        <div className='details__public'>
        <p>Public</p>
        <p className='data'>{data.name}</p>
        <p>{data.created_at}</p>
        </div>

        <div className='details__public'>
        <p>src</p>
        <p className='data'>{data.name}</p>
        <p>{data.created_at}</p>
        </div>

        <div className='details__public'>
        <p>.gitignore</p>
        <p className='data'>{data.name}</p>
        <p>{data.created_at}</p>
        </div>

        <div className='details__public'>
        <p>ReadMe.md</p>
        <p className='data'>{data.name}</p>
        <p>{data.created_at}</p>
        </div>

        <div className='details__public'>
        <p>Package-lock-json</p>
        <p className='data'>{data.name}</p>
        <p>{data.created_at}</p>
        </div>

        <div className='details__public'>
        <p>Package.json</p>
        <p className='data'>{data.name}</p>
        <p>{data.created_at}</p>
        </div>

      
        </div>
      

        <Details/>
      </div>
       

       
      
    </div>
  )
}
