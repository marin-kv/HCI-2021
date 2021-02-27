import React from 'react'
import styles from './style.module.css'
import { Link } from "gatsby"

const ShopCategories = (props) => {
    return (
        <div className={styles.shopCategories}>
            <div className={styles.categoriesTitle}>Kategorije</div>
            {Object.keys(props.categories).map(
                category => <Link to='/shop' className={styles.category} >
                    <div className={styles.categoryText} onClick={(e) => handleCategoryClick(e, category, props.setCategory)}>
                        {category}
                    </div>
                    {arrayToHtmlList(props.categories[category], props.setCategory)}
                </Link>)
            }
        </div>
    );
}

function handleCategoryClick(e, category, setCategory) {
    for (let elem of e.target.parentNode.parentNode.children) {
        if (elem.firstChild === e.target.parentNode.firstChild) continue;
        else if (elem.firstChild.nextSibling !== null) elem.firstChild.nextSibling.style.maxHeight = '0';
    }
    if (e.target.nextSibling !== null) e.target.nextSibling.style.maxHeight = '500px';
    setCategory(category);
    return;
}

function arrayToHtmlList(array, setCategory) {
    if (array.length === 0) return;
    else return (<div className={styles.subCategoryList} >{
        array.map(elem => <div className={styles.subCategory} onClick={() => setCategory(elem)} >{elem}</div>)
    }</div>);
}

export default ShopCategories