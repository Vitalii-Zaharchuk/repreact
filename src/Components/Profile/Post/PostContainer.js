import React from 'react'
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer'
import Post from './Post'
let PostContainer = (props) =>{
    let addPost = () =>{
        props.dispatch(addPostAC())
    }
    let onPostChange = (text) =>{
        props.dispatch(updateNewPostTextAC(text))
    }
    
    return(
        <Post addPost={addPost}
        onPostChange={onPostChange}
        newPostText={props.newPostText}
        postData={props.postData}/>
    )
}
export default PostContainer;