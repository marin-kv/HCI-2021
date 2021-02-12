import React, { useState } from 'react'
import ShopCategories from '../../components/ShopCategories'
import ShopProducts from '../../components/ShopProducts'
import styles from './style.module.css'

const categoryDict = {'Pivo': ['Svijetlo', 'Tamno', 'Lager', 'Ale'], 'Slad': [], 'Hmelj': [], 'Kvasac': [], 'Oprema': ['Kompleti', 'Fermentacija', 'Higijena', 'Punjenje']};

const ShopBody = () => {
    
    const [categories, setCategory] = useState([]);
    
    return(
        <main className = {styles.shopBody}>
            <ShopCategories categories = {categoryDict} setCategory = {setCategory} />
            <ShopProducts />
        </main>
    )
}

export default ShopBody