import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Katapult = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "primarius_katapult.png" }) {
       childImageSharp {
         fluid(maxWidth: 300, maxHeight: 300) {
           ...GatsbyImageSharpFluid
         }
       }
     }
   }
 `)
  return <Img fluid={data.myImage.childImageSharp.fluid} />
}

export default Katapult