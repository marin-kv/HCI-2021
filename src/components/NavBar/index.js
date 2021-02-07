import React from "react"
import styles from './style.module.css'
import Home_icon from "../Images/home_icon"
import Shop_icon from "../Images/shop_icon"
import O_nama_icon from "../Images/o_nama_icon"

const NavBar = () => (
    <nav className = {styles.navBar}>
        <div className = {styles.active}><div className = {styles.icon_and_text}><div className = {styles.navbar_icon}><Home_icon/></div><div>NASLOVNICA</div></div></div>
        <div className = {styles.navbar_button}><div className = {styles.icon_and_text}><div className = {styles.navbar_icon}><Shop_icon/></div><div>SHOP</div></div></div>
        <div className = {styles.navbar_button}><div className = {styles.icon_and_text}><div className = {styles.navbar_icon}><O_nama_icon/></div><div>O NAMA</div></div></div>
    </nav>
    
)

export default NavBar