import React from 'react'
import styles from './style.module.css'
import Katapult from '../Images/Katapult'

const ShopProducts = () => (
    <div className = {styles.shopProducts}>
        <div className = {styles.sectionTitle}>NOVO U PONUDI</div>
        <div className = {styles.productSection}>
            <div className = {styles.productImage}>
                <Katapult /> 
            </div>
        </div>
        <div className = {styles.sectionTitle}>AKCIJE</div>
        <div className = {styles.productSection}></div>
    </div>
)

export default ShopProducts