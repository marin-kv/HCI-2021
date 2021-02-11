import React from "react"
import styles from './style.module.css'
import NewsArticle from "../../components/articles"

const Articles = () => (
    <main className = {styles.articles}>
        <div className = {styles.title}>NOVOSTI</div>
        <NewsArticle/>
    </main>
    
)

export default Articles