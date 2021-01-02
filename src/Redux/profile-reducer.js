const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
let initialState = {
    postData : [
        {id:1,post:'I am good'},
        {id:2,post:'I am good'},
        {id:3,post:'I am good'}
    ],
    newPostText:'a'
}
const profileReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_POST:
            let newPost= {
                id:4,
                post:state.newPostText
            }
            state.postData.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;        
    }
}
export let addPostAC = () =>{
    return{
        type:'ADD_POST'
    }
}
export let updateNewPostTextAC = (newText) =>{
    return{
        type:'UPDATE_NEW_POST_TEXT',newText
    }
}
export default profileReducer;