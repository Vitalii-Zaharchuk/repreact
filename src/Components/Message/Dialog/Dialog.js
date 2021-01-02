import React from 'react'
import { addMessageAC, updateNewMessageTextAC } from '../../../Redux/message-reducer'
import s from './Dialog.module.css'
let Dialog = (props) =>{
    let MessageItem = (props) =>{
        return <div>{props.message}</div>
    }
    let messageElement = props.messageData.map(m =><MessageItem message={m.message}id={m.id}/>)
    let newMessageElement = React.createRef();

    let addMessage = () =>{
        props.addMessage()
    }
    let onMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.onMessageChange(text)
    }
    return(
        <div className={s.sms}>
                {messageElement}
                <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange}/>
                <button onClick={addMessage}>Send</button>
            
         </div>
    )
}
export default Dialog;