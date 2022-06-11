
import Image from 'next/image'
import React from 'react'
import styles from '.././index.module.css'

const JobPost = () => {
  return (
  <>
  <div className={ styles.skyblue1}>
<div className={ styles.jobPostEmpty}>
<Image src="/images/writing.svg" alt="Vercel Logo" width={106} height={106} />
<p>Your posted jobs will show here!</p>
<a>Post a Job</a>
</div>

</div>
  </>
  )
}

export default JobPost