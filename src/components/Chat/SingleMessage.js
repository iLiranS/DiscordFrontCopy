import React from 'react';
import styles from './SingeMessage.module.css'

export const SingleMessage = (props) => {
    const {content , ownerName , ownerImg} = props;
  return (
    <li className={styles.message}>
        <img src={ownerImg} alt={'msgOwnerAvatar'}></img>
        <div className={styles.msgContainer}>
            <p>{ownerName}</p>
            <p>{content}</p>
        </div>
    </li>
  )
}
