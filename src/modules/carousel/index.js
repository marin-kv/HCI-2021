import React from "react"
import styles from './style.module.css'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql, Link} from 'gatsby'


const Carousel = () => {
    const data = useStaticQuery(graphql`
       query {
         myImage: file(relativePath: { eq: "beer_img.png" }) {
           childImageSharp {
             fluid {
               ...GatsbyImageSharpFluid
             }
           }
         }
       }
     `)

    return (
        <BackgroundImage fluid = {data.myImage.childImageSharp.fluid} className={styles.carousel}>
            <div className={styles.carousel_text}>Želiš sam započeti? Posjeti naš web shop</div>
            <Link to="/shop/"><button className={styles.shop_button}>Shop &#8594;</button></Link>
        </BackgroundImage>

    )
}

export default Carousel