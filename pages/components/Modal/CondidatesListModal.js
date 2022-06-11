import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { VscChromeClose } from "react-icons/vsc";
import styles from './CondidatesListModal.module.css'
import NoList from './NoList';
import { Audio } from 'react-loader-spinner';

const CondidatesListModal= (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const[ data, setData] = useState(undefined)
const rtoken = localStorage.getItem("token")
const headers = {
    'Authorization': rtoken ,
    'My-Custom-Header': 'foobar'
}
  
   useEffect(()=>{
    fetch(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${props.id}/candidates`, {  headers  })
    .then(response => response.json())
    .then(result =>  {
      setData(result)
      setIsLoading(false)
      console.log("data---->we storeds",result)
   
   });
   },[])
  
  
   return(
    <> 
    {isLoading ? <Audio
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
 : <div className={styles.modal}>
    <div className={styles.condidateModal}>
      <div className={styles.justify_flex}>
        <h1>Applicants for this job</h1>
        <VscChromeClose onClick={()=>props.setOpen(false)} className={styles.cross} />
      </div>
      <span className={styles.border}></span>
      {data?.data?.length>0?(<span className={styles.application_count}>Total {data?.data?.length} applications</span>):(<span className={styles.application_count}>0 applications</span>)}
      

      <div
       className={styles.list}>
         {data?.data?.length> 0 ? (<div className={styles.flexwrap}>
          {
            data?.data?.map((d)=>(
<div className={styles.card}>
            <div className={styles.justify_flex}>
            <Avatar name={d.name} round="50%" size="50" color='#D9EFFF' fgColor='#303F60'/>
            <div className={styles.email}>
              <h2>{d.name}</h2>
              <span>{d.email}
              </span>
            </div>
            </div>
            <span>Skills</span>
            <p>{d.skills}</p>

          </div>
            ))
          }
          
        </div>) :(<NoList/>)}
            

       </div>
    </div>

  </div>}
  </>
   )
  
}

export default CondidatesListModal