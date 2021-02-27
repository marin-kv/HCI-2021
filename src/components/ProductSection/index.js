import React from 'react'
import styles from './style.module.css'
import Img from 'gatsby-image'

const ProductSection = (props) => {
    return (
        <div className={styles.productSection}>
            <div className={styles.productUpper}>
                <Img className={styles.productImage} fluid={props.data.allContentfulProduct.edges[0].node.productImage.fluid} />
                <div className={styles.productUpperText}>
                    <div style={{fontSize: 'xx-large', fontWeight: 'bold'}}>{props.data.allContentfulProduct.edges[0].node.productName}</div>
                    <div style={{fontSize: 'xx-large'}}>{props.data.allContentfulProduct.edges[0].node.productPrice + ',99 kn'}</div>
                    <button className={styles.cartButton}>Dodaj u košaricu</button>
                </div>
            </div>
            <div className={styles.productDescription}>
                {props.data.allContentfulProduct.edges[0].node.productDescription.productDescription}
            </div>
        </div>
    )
}

export default ProductSection