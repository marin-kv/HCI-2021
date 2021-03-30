import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const CartBody = () => {
    const data = useStaticQuery(graphql`
      {
        allContentfulProduct(filter: {
            node_locale: {eq: "en-US"},
            productName: {in: ["Primarius Blagoslov, IPA, 0,5L", "Medvedgrad Grička Vještica, Tamni Lager, 0,5L", "Sample Product"]}
        }) {
          edges {
            node {
              id
              productName
              productPrice
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

    const quantArray = [2, 1, 4];
    
    return (
        <main className={styles.cartBody}>
            <div className={styles.cartTitle}>KOŠARICA</div>
            <div className={styles.cartHead}>
              <div>Proizvod</div>
              <div className={styles.productQuantity}>
                <div>Cijena</div>
                <div>Količina</div>
              </div>
            </div>
            {data.allContentfulProduct.edges.map(
              edge => <div key={edge.node.id} className={styles.cartProduct}>
                <div className={styles.productView} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '50%'}}>
                  <Img className={styles.productImage} fluid={edge.node.productImage.fluid} />
                  <div className={styles.productName}>{edge.node.productName}</div>
                </div>
                <div className={styles.productQuantity}>
                  <div>{edge.node.productPrice + ',99 kn'}</div>
                  <div className={styles.quantBox}>{quantArray[data.allContentfulProduct.edges.indexOf(edge)]}</div>
                </div>
              </div>
            )}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px'}}>
              <Link to='/shop' className={styles.backButton}>&#8249; Natrag</Link>
              <div style={{textAlign: 'end'}}>
                <div style={{fontWeight: 'normal'}}>Ukupno:</div>
                <div style={{padding: '10px 0'}}>4291,93 kn</div>
                <div className={styles.orderButton}>Naruči</div>
              </div>
            </div>
        </main>
    )
}

export default CartBody