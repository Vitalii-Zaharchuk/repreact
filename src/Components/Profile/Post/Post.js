import React from 'react'
import s from './Post.module.css'
let Post = (props) =>{
    let PostItem = (props) =>{
        return <h1>{props.post}</h1>
    }
    let postElement = props.postData.map(p =><PostItem post={p.post} id={p.id}/>)
    let newPostElement = React.createRef()
    let addPost = () =>{
        props.addPost()
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.onPostChange(text)
    }
    
    return(
        <div>
             <div>
                <h1>MyPost</h1>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost}>AddPost</button>
            </div>
            <div>
                {postElement}
                
                
            </div>
        </div>
    )
}
export default Post