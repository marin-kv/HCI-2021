import React from "react"
import styles from './style.module.css'
import Login_icon from "../Images/login_icon"

const Login = () => (
    <nav className = {styles.login}>
        <button className = {styles.prijava}><div className ={styles.login_icon}><Login_icon/></div><div>Prijava</div></button>
        <button className = {styles.registracija}>Registracija</button>
    </nav>
    
)

export default Login