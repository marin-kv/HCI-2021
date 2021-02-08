import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
  return (<div style={{maxWidth: "800px", minWidth: "315px",maxHeight: "800px", minHeight: "325px"}}> 
    <Img fluid={data.myImage.childImageSharp.fluid} />
    </div>)
 }
 
 export default Mapa