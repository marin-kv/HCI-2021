import React from "react"
import styles from './style.module.css'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql, Link} from 'gatsby'


const ONamaTitleImg = () => {
    const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "o_nama_slika.png" }) {
       childImageSharp {
         fluid(maxWidth: 1440, maxHeight:300) {
           ...GatsbyImageSharpFluid_noBase64
         }
       }
     }
   }
 `)
    return(
    <main className = {styles.oNamaTitleImg}>
        <BackgroundImage fluid = {data.myImage.childImageSharp.fluid} className={styles.carousel}>
        <div className = {styles.oNamaTitleText}> <div className = {styles.oNamaTekst}>O nama</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec felis augue, vulputate at diam vel, imperdiet ullamcorper elit. 
        Nam euismod vel nisl quis elementum. Praesent sed lectus id orci mollis efficitur.</div>
        </BackgroundImage>
    </main>
    )
    
}

export default ONamaTitleImg