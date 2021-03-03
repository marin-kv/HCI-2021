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
                    <div style={{fontSize: 'xx-large', display: 'flex', alignItems: 'center'}}>
                        <span style={{textDecoration: props.data.allContentfulProduct.edges[0].node.productTags.includes('Akcija')? 'line-through' : 'none'}}>
                            {props.data.allContentfulProduct.edges[0].node.productPrice + ',99 kn'}
                        </span>
                        <span style={{ color: 'red', paddingLeft: '20px', display: props.data.allContentfulProduct.edges[0].node.productTags.includes('Akcija')? 'inline' : 'none'}}>
                            {parseInt((props.data.allContentfulProduct.edges[0].node.productPrice + 1) * 0.8) + ',99 kn'}
                        </span>
                        <input type="number" className={styles.numberInput} min='1' placeholder='1'></input>
                    </div>
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