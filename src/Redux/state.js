import messageReducer from "./message-reducer"
import profileReducer from "./profile-reducer"

let store ={
    _state: {
        profilePage:{
            postData : [
                {id:1,post:'I am good'},
                {id:2,post:'I am good'},
                {id:3,post:'I am good'}
            ],
            newPostText:'a'
        },
        messagePage:{
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
        
    },
    getState(){
        return this._state
    },
    rerenderEntireTree(){
        console.log('asfa')
    },
    subscribe(observer){
        this.rerenderEntireTree = observer
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagePage = messageReducer(this._state.messagePage,action)
        this.rerenderEntireTree(this._state)
    }
}
export default store