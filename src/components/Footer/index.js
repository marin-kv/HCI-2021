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
        <div className={styles.borderLeft}></div>
        <div className={styles.footerSectionFollow}>
            Prati nas
            <div className={styles.clickable}><Instagram /></div>
            <div className={styles.clickable}><Facebook /></div>
            <div className={styles.clickable}><Twitter /></div>
        </div>
        <div className={styles.borderRight}></div>
        <div className={styles.contactSection}>
            <div className={styles.contactText}>Kontakt</div>
            <div>
                <ul>
                    <li>email: email@primjer.com</li>
                    <li>tel: +385 99 123 1234</li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer