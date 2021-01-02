const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
let initialState = {
    nameData:[
        {id:1,name:'Misha'},
        {id:2,name:'Ily'},
        {id:3,name:'Vany'},
        {id:4,name:'Roma'}

    ],
    messageData: [
        {id:1,message:'Hi'},
        {id:2,message:'Fine'},
        {id:3,message:'Bad'},
        {id:4,message:'Sorry'}
    ],
    newMessageText:'Hi av'
}
const messageReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id:5,
                message:state.newMessageText
            }
            state.messageData.push(newMessage)
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        default:
            return state;        
    }
}
export let addMessageAC = () =>{
    return{
        type:'ADD_MESSAGE'
    }
}
export let updateNewMessageTextAC = (newText) =>{
    return{
        type:'UPDATE_NEW_MESSAGE_TEXT',newText
    }
}
export default messageReducer;