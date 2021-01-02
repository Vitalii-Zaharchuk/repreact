import React from 'react'
import InfoMe from './InfoAbout/InfoMe'
import PostContainer from './Post/PostContainer'
import s from './Profile.module.css'
let Profile = (props) =>{
    return(
        <div className={s.profile}>
            <InfoMe/>
            <PostContainer postData={props.profilePage.postData}
            dispatch={props.dispatch} 
            newPostText={props.profilePage.newPostText}/>
        </div>
    )
}
export default Profile