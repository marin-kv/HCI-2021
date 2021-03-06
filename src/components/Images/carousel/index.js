import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Carousel_img = () => {
    const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "beer_img.png" }) {
       childImageSharp {
         fluid(maxWidth: 1440, maxHeight:300) {
           ...GatsbyImageSharpFluid_noBase64
         }
       }
     }
   }
 `)
  return <Img fluid={data.myImage.childImageSharp.fluid} />
 }
 
 export default Carousel_img