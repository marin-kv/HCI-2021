import React from "react"
import styles from './style.module.css'
import Mapa from "../../components/Images/mapa"

const ONamaTekst = () => (
    <main className = {styles.body}>
        <div className = {styles.oNamaTekst}>
        <div><div className = {styles.oNamaTekstNaslov}>Lorem Ipsum</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec felis augue, vulputate at diam vel, imperdiet ullamcorper elit. 
            Nam euismod vel nisl quis elementum. Praesent sed lectus id orci mollis efficitur. 
            Vivamus eget laoreet urna, ut malesuada diam. 
            Mauris tincidunt metus eros, id laoreet est blandit nec.</div>
            <div><div className = {styles.oNamaTekstNaslov}>Lorem Ipsum</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec felis augue, vulputate at diam vel, imperdiet ullamcorper elit. 
            Nam euismod vel nisl quis elementum. Praesent sed lectus id orci mollis efficitur. 
            Vivamus eget laoreet urna, ut malesuada diam. 
            Mauris tincidunt metus eros, id laoreet est blandit nec.</div>
        </div>
        <Mapa/>
    </main>
    
)

export default ONamaTekst