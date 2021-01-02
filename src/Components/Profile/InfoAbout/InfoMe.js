import React from 'react'
import s from './InfoMe.module.css'
let InfoMe = () =>{
    return(
        <div>
            <div className={s.obloshka}>
                <img src='https://cdn.footballua.tv/i/image_650x360/uploads/football-media/image/5e0/8ed/deb/5e08eddebccf6_41588_bali_3.jpeg'/>
            </div>
            <div className={s.aboutMe}>
                <div className={s.ava}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ41dGKHG_Wbb6eHQOvG9OfnodY7PC3auVVg&usqp=CAU'/>
                </div>
                <div className={s.infoMe}>
                    <div>
                        Igor Bezus
                    </div>
                    <div>
                        Berlin
                    </div>
                    <div>
                        23
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoMe;