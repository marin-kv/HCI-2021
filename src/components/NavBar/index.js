import React from "react"
import styles from './style.module.css'
import Home_icon from "../Images/home_icon"
import Shop_icon from "../Images/shop_icon"
import O_nama_icon from "../Images/o_nama_icon"
import { Link } from "gatsby"

const NavBar = ({activeTab}) => (
    <nav className = {styles.navBar}>
        <div className = {activeTab === "Naslovnica" ? styles.active : styles.navbar_button}><Link to="/" style={{ textDecoration: 'none' }}><div className = {styles.icon_and_text}><div className = {styles.navbar_icon}><Home_icon/></div><div>NASLOVNICA</div></div></Link></div>
        <div className = {activeTab === "Shop" ? styles.active : styles.navbar_button}><Link to="/shop/" style={{ textDecoration: 'none' }}><div className = {styles.icon_and_text}><div className = {styles.navbar_icon}><Shop_icon/></div><div>SHOP</div></div></Link></div>
        <div className = {activeTab === "O_nama" ? styles.active : styles.navbar_button}><Link to="/o_nama/" style={{ textDecoration: 'none' }}><div className = {styles.icon_and_text}><div className = {styles.navbar_icon}><O_nama_icon/></div><div>O NAMA</div></div></Link></div>
    </nav>
    
)

export default NavBar