import React from "react"
import styles from './style.module.css'
import ONamaSlika from "../../components/Images/o_nama_slika"


const ONamaTitleImg = () => (
    <main className = {styles.oNamaTitleImg}>
        <div className = {styles.oNamaTitleText}> <div className = {styles.oNamaTekst}>O nama</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec felis augue, vulputate at diam vel, imperdiet ullamcorper elit. 
        Nam euismod vel nisl quis elementum. Praesent sed lectus id orci mollis efficitur.</div>
        <ONamaSlika/>
    </main>
    
)

export default ONamaTitleImg