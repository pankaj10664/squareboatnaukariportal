import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Avatar from 'react-avatar'
import ClickAwayListener from 'react-click-away-listener'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { toast } from 'react-toastify'
import styles from './index.module.css'
var classNames = require('classnames');
const HeaderPage = () => {
    const router = useRouter()
    const[ openModal,setOpenModal] = useState(false)
    const fn = {
        logOut:()=>{
        setOpenModal(false)
        router.push("/")
        toast("You have succesFully logged out.")
        },
    }
  return (
    <header className={ classNames(styles.header,styles.signedHeader)}>
     < div className={styles.hv_center_flex}>
   <Image src="/images/logo.png" alt="Vercel Logo" width={82} height={26} />
   {/* <ClickAwayListener 
   onClickAway={fn.logOut}
   > */}
   <div className={styles.avtar}>
   <Avatar name="R" round="50%" size="46" color='#D9EFFF' fgColor='#303F60'/>
   <IoMdArrowDropdown color="white" onClick={()=>{setOpenModal(true)}} size={15} /> 
   {openModal&&(
     <div>
   <div className={styles.logOut} 
    onClick={fn.logOut}
   >
     logout
     </div>
     <IoMdArrowDropup color="white" className={styles.uparow} size={20}/>
     </div>)}
   </div>
   {/* </ClickAwayListener> */}
   </div>
   </header>
  )
}

export default HeaderPage