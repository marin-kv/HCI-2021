import React from "react"
import styles from './style.module.css'
import NavBar from "../NavBar"
import Login from "../login"
import Beer_logo from "../Images/beer_logo"


const Header = ({ activeTab }) => {
    return (
        <main className={styles.header}>
            <Beer_logo />
            <NavBar activeTab={activeTab} />
            <Login />
        </main>
    )
}

export default Header