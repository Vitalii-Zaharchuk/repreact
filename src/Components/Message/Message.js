import React from 'react'
import Dialog from './Dialog/Dialog'
import DialogContainer from './Dialog/DialogContainer'
import s from './Message.module.css'
import Name from './Name/Name'
let Message = (props) =>{
    return(
        <div className={s.message}>
            <Name nameData={props.messagePage.nameData}/>
            <DialogContainer messageData={props.messagePage.messageData}
            dispatch={props.dispatch} 
            newMessageText={props.messagePage.newMessageText}
            />
        </div>
    )
}
export default Message