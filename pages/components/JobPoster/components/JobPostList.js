import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import 'react-toastify/dist/ReactToastify.css';
import styles from '.././index.module.css'
import CondidatesListModal from '../../Modal/CondidatesListModal';
import JobPost from './JobPost';
const JobPostList = () => {
const[ open ,setOpen] = useState(false)
const[ data, setData] = useState([])
 const [id,setId]= useState('')
const rtoken = localStorage.getItem('token')
const headers = {
  'Authorization': rtoken ,
  'My-Custom-Header': 'foobar'
};

 useEffect(()=>{
  fetch('https://jobs-api.squareboat.info/api/v1/recruiters/jobs', {  headers  })
  .then(response => response.json())
  .then(result =>  {
    setData(result)
 });
 },[])
  
  return ( 
  <>
  {data?.data?.data?.length>0?(
  <div className={styles.skyblue}>
<div className={ styles.jobPoster}>
  {data?.data?.data?.map((d,i)=>(
         <div className={styles.post} key={i}>
           <h4> {d.title}</h4>
           <p>{d.description}</p>
           <div className={ styles.flex}>
           <small><IoLocationOutline/>{d.location}</small>
           <button onClick={()=>{
            setId(d.id)
            setOpen(true)}}>View Applications</button>
           </div>
           </div>
           ))
}          
</div>
  </div> ):(<JobPost/>) }

  {open&&(<CondidatesListModal  id={id} setOpen={setOpen}/>)}
  </>

  )
}

export default JobPostList