import React, { useState } from 'react'
import styles from './Sidebar.module.css'

function Sidebar(props) {
    const [activeIndex , setActiveIndex] = useState(0);
    const isBarOpen = props.isBarOpen;

    const setActiveServer = index =>{
        setActiveIndex(index);
    }

  return (
    <div className={`${styles.Sidecontainer} ${isBarOpen ? '' : styles.hidden}`}>

 


        

         <div onClick={()=>{setActiveServer(0)}}  className={`${styles.profileDiv} ${activeIndex ===0 ? styles.active :''}`}>
            <img src='https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg' alt='profile'></img>
        </div>
        <section className={styles.seperator}></section>

        <ul>

        <li>
        <div  onClick={()=>{setActiveServer(1)}} className={`${styles.profileDiv} ${activeIndex ===1 ? styles.active :''}`}>
            <img src='https://picsum.photos/64/64' alt='profile'></img>
        </div>
        </li>

        <li>
        <div  onClick={()=>{setActiveServer(2)}} className={`${styles.profileDiv} ${activeIndex ===2 ? styles.active :''}`}>
            <img src='https://picsum.photos/64/64' alt='profile'></img>
        </div>
        </li>

        <li>
        <div  onClick={()=>{setActiveServer(3)}} className={`${styles.profileDiv} ${activeIndex ===3 ? styles.active :''}`}>
            <img src='https://picsum.photos/64/64' alt='profile'></img>
        </div>
        </li>


        </ul>

   


    </div>
  )
}

export default Sidebar