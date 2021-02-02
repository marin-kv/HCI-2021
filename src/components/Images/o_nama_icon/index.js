import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const O_nama_icon = () => {
    const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "o_nama_icon.png" }) {
       childImageSharp {
         fixed(width: 23, height:19) {
           ...GatsbyImageSharpFixed_noBase64
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed}
              />
 }
 
 export default O_nama_icon