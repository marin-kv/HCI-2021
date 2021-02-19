import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

const ShopProducts = (props) => {
    const data = useStaticQuery(graphql`
      {
        allContentfulProduct(filter: {node_locale: {eq: "en-US"}}, sort: {fields: productName}) {
          edges {
            node {
              id
              productName
              productPrice
              productTags
              productImage {
                fluid(maxWidth: 300, maxHeight: 300){
                    ...GatsbyContentfulFluid
                    }
              }
            }
          }
        }
      }
    `)

    if(props.category === '') return(
        <div className = {styles.shopProductsMain}>
          <div className = {styles.sectionTitle}>NOVO</div>
          <div className = {styles.offerSection}>
            {filterByTag(data, 'Novo').map(
                edge => <div className = {styles.productCard}>
                  <div className = {styles.productImage}>
                    <Img fluid={edge.node.productImage.fluid} style = {{borderRadius: '10px'}} />
                  </div>
                  <p>{edge.node.productName}</p>
                  <p>{edge.node.productPrice + ',99 kn'}</p>
                </div>
            )}
          </div>
          <div className = {styles.sectionTitle}>AKCIJE</div>
          <div className = {styles.offerSection}>
          {filterByTag(data, 'Akcija').map(
              edge => <div className = {styles.productCard}>
                <div className = {styles.productImage}>
                  <Img fluid={edge.node.productImage.fluid} style = {{borderRadius: '10px'}} />
                </div>
                <p>{edge.node.productName}</p>
                <div style = {{display: 'flex', justifyContent: 'space-between'}} >
                  <p style = {{textDecoration: 'line-through', margin: 0}} >{edge.node.productPrice + ',99 kn'}</p>
                  <p style = {{color: 'red', margin: 0}} >{parseInt((edge.node.productPrice + 1) * 0.8) + ',99 kn'}</p>
                </div>
              </div>
          )}
          </div>
        </div>
      )

    else return(
        <div className = {styles.shopProductsSub}>
          <div className = {styles.sectionTitle} style = {{marginLeft: '5%', padding: '2% 0',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>{props.category.toUpperCase()}</div>
            <div className = {styles.backButton} onClick = {() => props.setCategory('')}>&#8249; Povratak</div>
          </div>
          {filterByTag(data, props.category).map(
              edge => <div className = {styles.productCard}>
                <div className = {styles.productImage}>
                  <Img fluid={edge.node.productImage.fluid} style = {{borderRadius: '10px'}} />
                </div>
                <p>{edge.node.productName}</p>
                <p>{edge.node.productPrice + ',99 kn'}</p>
              </div>
          )}
        </div>
    )
}

function filterByTag (data, tag) {
  let filteredData = [];
  for (let edge of data.allContentfulProduct.edges) {
      if(edge.node.productTags.includes(tag)) filteredData.push(edge);
    }
  return filteredData;  
}

export default ShopProducts