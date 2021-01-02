import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
let Navbar = () =>{
    return(
        <div className={s.navbar}>
            <div >
                <NavLink to='/profile'>Profile</NavLink>
                
                
            </div>
            <div >
                <NavLink to='/message'>Messages</NavLink>
                
            </div>
            <div>
                
                <a href='#' className={s.navi}>News</a>
               
            </div>
            <div >
                
                <a href='#' className={s.navi}>Music</a>
            </div>
        </div>
    )
}
export default Navbar