import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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

  let categoryTitle;
  if (props.categoryParent !== '') categoryTitle = props.categoryParent.toUpperCase() + ' > ' + props.category.toUpperCase();
  else categoryTitle = props.category.toUpperCase();

  if (props.category === '') return (
    <div className={styles.shopProductsMain}>
      <div className={styles.searchBar}>
        <FontAwesomeIcon icon={faSearch} style={{color: 'gray', marginRight: '12px'}} />
        <input placeholder="Pretraži" style={{ border: 'none', outline: 'none', fontFamily: 'Montserrat', fontSize: '16px', width: '80%' }} />
      </div>
      <div className={styles.sectionTitle}>NOVO</div>
      <div className={styles.offerSection}>
        {filterByTag(data, 'Novo').map(
          edge => <Link key={edge.node.id} to={'/products/' + edge.node.id} className={styles.productCard} style={{ textDecoration: 'none' }}>
            <div>
              <div className={styles.productImage}>
                <Img fluid={edge.node.productImage.fluid} style={{ borderRadius: '10px' }} />
              </div>
              <p>{edge.node.productName}</p>
              <p>{edge.node.productPrice + ',99 kn'}</p>
            </div>
          </Link>
        )}
      </div>
      <div className={styles.sectionTitle}>AKCIJE</div>
      <div className={styles.offerSection}>
        {filterByTag(data, 'Akcija').map(
          edge => <Link key={edge.node.id} key={edge.node.id} to={'/products/' + edge.node.id} className={styles.productCard} style={{ textDecoration: 'none' }}>
            <div>
              <div className={styles.productImage}>
                <Img fluid={edge.node.productImage.fluid} style={{ borderRadius: '10px' }} />
              </div>
              <p>{edge.node.productName}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <p style={{ textDecoration: 'line-through', margin: 0 }} >{edge.node.productPrice + ',99 kn'}</p>
                <p style={{ color: 'red', margin: 0 }} >{parseInt((edge.node.productPrice + 1) * 0.8) + ',99 kn'}</p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )

  else return (
    <div className={styles.shopProductsSub}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={faSearch} style={{color: 'gray', marginRight: '12px'}} />
          <input placeholder="Pretraži" style={{ border: 'none', outline: 'none', fontFamily: 'Montserrat', fontSize: '16px', width: '80%' }} />
        </div>
      </div>
      <div className={styles.sectionTitle} style={{ padding: '2% 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>{categoryTitle}</div>
        <div className={styles.backButton} onClick={() => props.setCategory('')}>&#8249; Natrag</div>
      </div>
      {filterByTag(data, props.category).map(
        edge => <Link key={edge.node.id} to={'/products/' + edge.node.id} className={styles.productCard} style={{ textDecoration: 'none' }}>
          <div>
            <div className={styles.productImage}>
              <Img fluid={edge.node.productImage.fluid} style={{ borderRadius: '10px' }} />
            </div>
            <p>{edge.node.productName}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
              <p style={{ textDecoration: edge.node.productTags.includes('Akcija') ? 'line-through' : 'none', margin: 0 }} >{edge.node.productPrice + ',99 kn'}</p>
              <p style={{ color: 'red', margin: 0, display: edge.node.productTags.includes('Akcija') ? 'block' : 'none' }} >{parseInt((edge.node.productPrice + 1) * 0.8) + ',99 kn'}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}

function filterByTag(data, tag) {
  let filteredData = [];
  for (let edge of data.allContentfulProduct.edges) {
    if (edge.node.productTags.includes(tag)) filteredData.push(edge);
  }
  return filteredData;
}

export default ShopProducts