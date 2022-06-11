import React, { useState } from 'react'
import styles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "react-js-pagination";
import { IoMdHome } from "react-icons/io";
import JobPostList from './components/JobPostList';
import HeaderPage from '../Header';
const JobPoster = () => {
  const[ activePage,setActivePage] =useState(3)
  const fn = {
    handlePageChange:(pageNumber:number)=>{
      setActivePage(pageNumber)
    },
  }
  return (
    <>
<HeaderPage/>
<div className={styles.job_content}>  
<div className={styles.container}>
<a href="/"><IoMdHome/> Home</a>
 <h2>Jobs posted by you</h2>
 </div>
</div>
<div className={styles.skyblue}>
<JobPostList/>
</div>
<Pagination
activePage={activePage}
itemsCountPerPage={12}
totalItemsCount={450}
pageRangeDisplayed={3}
onChange={fn.handlePageChange}
/>
    </>
  )
}

export default JobPoster