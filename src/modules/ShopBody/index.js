import React, { useState } from 'react'
import ShopCategories from '../../components/ShopCategories'
import ShopProducts from '../../components/ShopProducts'
import styles from './style.module.css'

const ShopBody = ({ sentCategory }) => {

    const categoryDict = {'Pivo': ['Svijetlo', 'Tamno', 'Lager', 'Ale', 'Pšenično'], 'Slad': [], 'Hmelj': [], 'Kvasac': [], 'Oprema': ['Kompleti', 'Fermentacija', 'Higijena', 'Punjenje']};
    const [category, setCategory] = useState(sentCategory ? sentCategory : '');
    const [categoryParent, setCategoryParent] = useState('');

    return(
        <main className = {styles.shopBody}>
            <ShopCategories categories = {categoryDict} category = {category} categoryParent={categoryParent} setCategory = {setCategory} setCategoryParent = {setCategoryParent} />
            <ShopProducts category = {category} categoryParent = {categoryParent} setCategory = {setCategory} />
        </main>
    )
}

export default ShopBody