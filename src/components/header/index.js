import React from "react"
import styles from './style.module.css'
import NavBar from "../NavBar"
import Login from "../login"
import Beer_logo from "../Images/beer_logo"


const Header = () => (
    <main className = {styles.header}>
        <Beer_logo/>
        <NavBar/>
        <Login/>
    </main>
    
)

export default Header