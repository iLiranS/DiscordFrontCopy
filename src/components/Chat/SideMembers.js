import React from 'react'
import styles from './SideMembers.module.css'

export const SideMembers = () => {
  return (
    

        <section className={styles.membersSection}>

            <div>

            <p>Owner</p>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Herk</p></section>
            </div>
          

            <div>
            <p>ONLINE</p>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Lateefah</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Madalyn</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Kapil</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Julia</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Krishna</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Krishnaaaaaaaaaaaa</p></section>
            </div>

            <div className={styles.offlineMembers}>
            <p>OFFLINE</p>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Lateefah</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Madalyn</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Kapil</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Julia</p></section>
            <section className={styles.member}><img src='https://picsum.photos/64/64' alt='memberImage'></img> <p>Krishna</p></section>
            </div>
        </section>
  )
}
