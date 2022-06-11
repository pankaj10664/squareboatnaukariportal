import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify';
import styles from '../styles/Home.module.css'
var classNames = require('classnames');

const Home: NextPage = () => {
  return (
    <>
    <div >
      <Head>
        <title>Naukari App</title>
        <meta name="description" content="Homepage of the Naukari portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <header className={styles.header}>
     < div className={styles.hv_center_flex}>
   <Image src="/images/logo.png" alt="Vercel Logo" width={82} height={26} />
   <a href="/login">
     Login/SignUp
   </a>
   </div>

   </header>

   <div className={classNames(styles.bannerDiv, styles.container)}>
     <div className={styles.leftDiv}>
<h1 className={styles.heading}>Welcome to <br></br><small>My</small><span>Jobs</span></h1>
<a href="/login" className={styles.button}>Get Started</a>
     </div>
     <div className={styles.rightDiv}>
       <figure>
       <img src="/images/bannerimg.png" alt="Vercel Logo" />
       </figure>

</div>
   </div>
      <main className={styles.mainDiv}>

        <div className={styles.container}>
          <h2>Why us</h2> 
        <div className={styles.parentCard}>
          <div className={styles.card}>
            <h3>Get More<br></br>Visibility</h3>
            <p>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Corporis vel asperiores ipsum ea.</p>
          </div>
          <div className={styles.card}>
          <h3>Organize Your<br></br> Candidates</h3>
            <p>Lorem, ipsum dolor sit amet consectetur<br></br> adipisicing elit. Deleniti, voluptas autem? Doloribus, nisi!</p>
          </div>
          <div className={styles.card}>
          <h3>Verify Their<br></br> Abilities</h3>
            <p>Lorem ipsum dolor, sit amet consectetur<br></br> adipisicing elit. Fugiat recusandae rem delectus? Fugit?</p>
          </div> 
        </div>
        <h2>Companies Who Trust Us</h2> 
        <ul className={styles.imgwrap}>
          <li><img src="/images/solaytic.png"/></li>
          <li><img src="/images/kanba.png"/></li>
          <li><img src="/images/lighting.png"/></li>
          <li><img src="/images/ztos.png"/></li>
          <li><img src="/images/kanba.png"/></li>
          <li><img src="/images/goldline.png"/></li>
          <li><img src="/images/ideaa.png"/></li>
          <li><img src="/images/liva.png"/></li>
          <li><img src="/images/velocity-9.png"/></li>
        </ul>
        </div>
         
           
      
      </main>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Home
