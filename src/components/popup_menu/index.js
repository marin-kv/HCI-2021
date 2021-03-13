import React, { useState } from "react"
import { Link } from "gatsby"
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars
} from '@fortawesome/free-solid-svg-icons'
import { myLocalStorage } from "../../helper";

function popupClick(changePopupState) {
    changePopupState(true);
}

function xClick(changePopupState) {
    changePopupState(false);
}

const PopupMenu = ({ activeTab }) => {
    const [popupState, changePopupState] = useState(false);
    return (
        <div className={styles.body}>
            <FontAwesomeIcon onClick={() => popupClick(changePopupState)} icon={faBars} size="2x" className={styles.hamburger} />
            <div className={popupState === true ? styles.popupMenu : styles.popupMenuHidden}>
                <div onClick={() => xClick(changePopupState)} className={styles.popupMenuX}>&#10006;</div>
                <div className={activeTab === "Naslovnica" ? styles.active : styles.navbar_button}><Link to="/" style={{ textDecoration: 'none' }}><div>NASLOVNICA</div></Link></div>
                <div className={activeTab === "Shop" ? styles.active : styles.navbar_button}><Link to="/shop/" style={{ textDecoration: 'none' }}><div>SHOP</div></Link></div>
                <div className={activeTab === "O_nama" ? styles.active : styles.navbar_button}><Link to="/o_nama/" style={{ textDecoration: 'none' }}><div>O NAMA</div></Link></div>
                <div className={myLocalStorage.getItem("loggedIn") === "false" ? styles.prijava_button : styles.prijava_button_hidden}>
                    <div className={activeTab === "Prijava" ? styles.active : styles.navbar_button}><Link to="/prijava/" style={{ textDecoration: 'none' }}><div>PRIJAVA</div></Link></div>
                </div>
                <div className={myLocalStorage.getItem("loggedIn") === "true" ? styles.loggedIn : styles.loggedIn_hidden}>
                    <div style = {{display:"flex", flexDirection:"column"}}>
                        Pozdrav, {myLocalStorage.getItem("username")}
                        <a href="#" onClick={() => myLocalStorage.setItem("loggedIn", false)} className = {styles.odjava_button}>Odjavi se</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupMenu