import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Beer_logo = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "beer_logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
   return (
     <div style={{maxWidth: "500px", minWidth: "250px"}}> 
       <Img fluid={data.myImage.childImageSharp.fluid} />
     </div>
   )
 }
 
 export default Beer_logo