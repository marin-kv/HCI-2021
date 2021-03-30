import React, { useState } from 'react'
import ShopCategories from '../../components/ShopCategories'
import ShopProducts from '../../components/ShopProducts'
import MobileShopCategories from '../../components/MobileShopCategories'
import styles from './style.module.css'

const ShopBody = ({ sentCategory }) => {

    const categoryDict = { 'Pivo': ['Svijetlo', 'Tamno', 'Lager', 'Ale', 'Pšenično'], 'Slad': [], 'Hmelj': [], 'Kvasac': [], 'Oprema': ['Kompleti', 'Fermentacija', 'Higijena', 'Punjenje'] };
    const [category, setCategory] = useState(sentCategory ? sentCategory : '');
    const [categoryParent, setCategoryParent] = useState('');
    const [isOpen, setIsOpen] = useState('0px');

    return (
        <main className={styles.shopBody}>
            <MobileShopCategories categories={categoryDict} category={category} categoryParent={categoryParent} setCategory={setCategory} setCategoryParent={setCategoryParent} />
            <ShopCategories categories={categoryDict} category={category} categoryParent={categoryParent} setCategory={setCategory} setCategoryParent={setCategoryParent} />
            <ShopProducts category={category} categoryParent={categoryParent} setCategory={setCategory} />
        </main>
    )
}

export default ShopBody