import Image from 'next/image'
import React from 'react'
import styles from './CondidatesListModal.module.css'
const NoList = () => {
  return (
    <div className={styles.nolist}>
        <Image src="/images/curriculum.svg" alt="Vercel Logo" width={84} height={106} />
       <p>No application available!</p>

    </div>
  )
}

export default NoList