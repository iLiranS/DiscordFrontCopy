import React, { useState } from 'react'
import styles from './ServerChats.module.css'
import {AiOutlinePlus , AiOutlineDown} from 'react-icons/ai';
import {BsHash , BsVolumeUp} from 'react-icons/bs';
import {HiMicrophone} from 'react-icons/hi';
import {TbMicrophoneOff ,TbHeadphonesOff , TbHeadphones} from 'react-icons/tb'
import {RiSettings5Fill} from 'react-icons/ri'


function ServerChats(props) {
    const isBarOpen = props.isBarOpen;
    const [microphoneOn , setMicrophoneOn] = useState(true);
    const [headPhonesOn , setHeadPhonesOn] = useState(true);

    const toggleMic = () => setMicrophoneOn(prev => !prev);
    const toggleHeadPhones = () => setHeadPhonesOn(prev => !prev);

  return (
    <div className={`${styles.ChatsContainer} ${isBarOpen ? '' : styles.hidden}`}>

    <div className={styles.serverInfoContainer}>

        <section className={styles.serverHeader}>
            <h3>Pro Server</h3>
            <AiOutlineDown/>
        </section>

        <section className={styles.channelHeader}>
            <section>
            <AiOutlineDown className={styles.rotateArrow}/>
            <p>TEXT CHANNELS</p>
            </section>
            <AiOutlinePlus className={styles.plus}/>
        </section>

        <section className={styles.channel}>
            <BsHash/>
            <p>General</p>
        </section>

        <section className={styles.channel}>
            <BsHash/>
            <p>Something</p>
        </section>


        <section className={styles.channelHeader}>
        <section>
            <AiOutlineDown className={styles.rotateArrow}/>
            <p>VOICE CHANNELS</p>
            </section>
            <AiOutlinePlus className={styles.plus}/>
        </section>

        <section className={styles.channel}>
            <BsVolumeUp/>
            <p>General Voice</p>
        </section>
        </div>

    <section className={styles.profileControl}>

        <div className={styles.avatarHolder}>
        <img src='https://i.imgur.com/rBQq49N.png' alt='avatar'></img>
        </div>

        <section className={styles.profileNameInfo}>
            <div className={styles.nameInfo}>
            <h4>SpyNinja</h4>
            <p>#9696</p>
            </div>

            <div className={styles.inputDiv}>
            {microphoneOn ? <HiMicrophone onClick={toggleMic}/> : <TbMicrophoneOff onClick={toggleMic}/>}
            {headPhonesOn ? <TbHeadphones onClick={toggleHeadPhones}/> : <TbHeadphonesOff onClick={toggleHeadPhones}/>}

            <RiSettings5Fill/>
            </div>
           

        </section>

    </section>


    </div>
  )
}

export default ServerChats