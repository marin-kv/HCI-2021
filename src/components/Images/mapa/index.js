import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './style.module.css'

const Mapa = () => {
    const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "mapa.png" }) {
       childImageSharp {
         fluid(maxWidth: 315, maxHeight:325) {
           ...GatsbyImageSharpFluid_noBase64
         }
       }
     }
   }
 `)
  return (<div className = {styles.mapStyle}> 
    <Img fluid={data.myImage.childImageSharp.fluid} />
    </div>)
 }
 
 export default Mapa