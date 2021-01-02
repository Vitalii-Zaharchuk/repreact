import React from 'react'
import { connect } from 'react-redux'
import { addMessageAC, updateNewMessageTextAC } from '../../../Redux/message-reducer'
import Dialog from './Dialog'

let mapStateToProps = (state) =>{
    return{
        messageData:state.profilePage.messageData,
        newMessageText:state.newMessageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addMessage:() =>{
            dispatch(addMessageAC())
        },
        onMessageChange:(text) =>{
            dispatch(updateNewMessageTextAC(text))
        }
    }
}
let DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog)
export default DialogContainer;