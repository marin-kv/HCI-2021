import React from "react"
import styles from './style.module.css'
import Carousel_img from "../../components/Images/carousel"


const Carousel = () => (
    <main className = {styles.carousel}>
        <Carousel_img/>
        <div className = {styles.carousel_text}><div>Želiš sam započeti? Posjeti naš web shop</div>
        <button className = {styles.shop_button}>Shop &#8594;</button></div>
    </main>
    
)

export default Carousel