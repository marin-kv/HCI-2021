import React from 'react'
import Facebook from '../Images/Facebook'
import Instagram from '../Images/Instagram'
import Logo from '../Images/Logo'
import Twitter from '../Images/Twitter'
import styles from './style.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerSectionLogo}>
            <Logo />
            <p>Sve za pivo,<br />&nbsp;sve o pivu</p>
        </div>
        <div className={styles.border}></div>
        <div className={styles.footerSectionFollow}>
            Prati nas
            <Instagram />
            <Facebook />
            <Twitter />
        </div>
        <div className={styles.border}></div>
        <div className={styles.contactSection}>
            <div>Kontakt</div>
            <div>
                <ul>
                    <li style={{fontSize: 'medium'}}>email: email@primjer.com</li>
                    <li style={{fontSize: 'medium'}}>tel: +385 99 123 1234</li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer