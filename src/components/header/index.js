import React from "react"
import styles from './style.module.css'
import NavBar from "../NavBar"
import Login from "../login"
import PopupMenu from "../popup_menu"
import Beer_logo from "../Images/beer_logo"


const Header = ({ activeTab }) => {
    return (
        <main className={styles.header}>
            <PopupMenu activeTab={activeTab}/>
            <Beer_logo />
            <NavBar activeTab={activeTab} />
            <Login />
            <div className={styles.mobileDummy}></div>
        </main>
    )
}

export default Header