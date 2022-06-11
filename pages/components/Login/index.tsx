import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import styles from './index.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

const LoginBox = () => {
    const router = useRouter()
 const [ email,setEmail] = useState("")
 const [ pass,setPass] = useState("")


 const fn = {
  postForm: async (e: React.FormEvent<HTMLButtonElement>) => {
    e?.preventDefault()
    await fetch('https://jobs-api.squareboat.info/api/v1/auth/login', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        "email": email,
        "password": pass,
        redirectingDomain: 'http://localhost:3000',
      }),
    })
      .then(async (data) => {
        const response = await data.json();
 console.log("dataFlow",response)
        if (response?.code !== 200) {
        toast.warn("Something went wrong")
        }

        if (response.code === 200) {
       localStorage.setItem("data",response.data.token)
       console.log("localstorage",localStorage.token)
        toast("SuccesFully loggedIn")
        router.push({
          pathname:"/jobposter", 
        })
      }}) .catch((err) => {
        if (typeof err !== 'string') {
          err = 'Network error';
        }
        toast.warning(err || 'Something went wrong!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => {});
  },
};

const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (

  <div>
    <header className={styles.header}>
    < div className={styles.hv_center_flex}>
  <Image src="/images/logo.png" alt="Vercel Logo" width={82} height={26} />
  </div>
   </header>
  <div className={styles.loginDiv}> 
  </div>
  <div className={styles.loginBox}>
    <h2>Login</h2>
    <form className={styles.formDiv}>
      <label>Email address</label>
    <input
          type="text"
          value={email}
          placeholder="Enter your email"
          //  name="email"
          autoComplete="off"
          {...register("email", { required: "Incorrect email address" })}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          
        /><br></br>
         <label>Password</label>
          <input
          type="text"
          value={pass}
          placeholder="Enter your password"
          name="password"
          autoComplete="off"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          required
        />
        <br></br>
        <div className={styles.text_align}>
      <button className={styles.loginbtn} onClick={
        fn.postForm
        }>Login</button>
      </div>
    </form>
  </div>
  </div>
  // </DataContext.Provider>
  )
}
  

export default LoginBox