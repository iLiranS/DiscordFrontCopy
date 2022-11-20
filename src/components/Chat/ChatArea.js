import React, { useEffect, useState , useRef} from 'react';
import styles from './ChatArea.module.css';
import {AiOutlineMenu,AiOutlineSearch,AiFillPlusCircle} from 'react-icons/ai';
import {BsHash} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
import { SingleMessage } from './SingleMessage';
import { SideMembers } from './SideMembers';

const  ChatArea =(props)=> {
  const emojiBank = ['😀','😁','😋','😎','😘','😪','😫','😴','😌','😜','🤑','🙁','😲','😤','😙','🤪','🤠','🤭','🥳']
  const [emojiText,setEmojiText] = useState('😂');
  const [showMembers , setShowMembers] = useState(true);
  const [messageValue,setMessageValue] = useState('');
  const [messages,setMessages] = useState([]);
  const chatUL = useRef();
  const inputRef = useRef();


  const updateMessageHandler = event =>{
    setMessageValue(event.target.value);
  }

    const changeEmoji = () =>{
        const result = emojiBank[Math.floor(Math.random()*emojiBank.length)];
        setEmojiText(result);
    }

    const toggleBar = () =>{
        props.toggleBar();
    }
    const toggleMembers = () =>{
        setShowMembers(prev => !prev);
    }
    const addMessage = () =>{
        setMessages(prev =>{
            const arr = [...prev , messageValue]
            return arr;
        })
    }

    onkeypress = event =>{
        if (event.key ==='Enter' && document.activeElement ===inputRef.current && messageValue.trim().length>0){
            addMessage();
            setMessageValue('');
        }
    }

    useEffect(()=>{
        if(chatUL.current){
            chatUL.current.scrollTo(0,chatUL.current.scrollHeight);
        }
    },[messages])

    const messagesMapping = messages.map(item => <SingleMessage key={Math.random()} content={item} ownerName={'LiranS'} ownerImg={'https://picsum.photos/64/64'}/> )

  return (
    <div className={styles.chatContainer}>
        
        <nav className={styles.chatNav}>
            <div>
            <AiOutlineMenu className={styles.menuIcon} onClick={toggleBar}/>
            <BsHash/>
            <p>General</p>
            </div>

            <div>
                <AiOutlineSearch/>
                <FaUserFriends className={showMembers ? styles.activeColor : ''} onClick={toggleMembers}/>
            </div>
            

        </nav>

        <div className={styles.chatSection}>

    <div className={styles.columnChatAndInput}>

    

        <ul ref={chatUL} className={styles.chat}>
           {messagesMapping}
        </ul>



        <section className={styles.messageSection}>
            <AiFillPlusCircle className={styles.addIcon}/>
            <input ref={inputRef} value={messageValue} onChange={updateMessageHandler} placeholder='Message #General' type={'text'}></input>
            <p onMouseEnter={changeEmoji}>{emojiText}</p>
        </section>
        </div>

        {showMembers && <SideMembers/>}

        </div>


    </div>
  )
}

export default ChatArea