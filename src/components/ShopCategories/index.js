import React from 'react'
import styles from './style.module.css'
import { Link } from "gatsby"

const ShopCategories = (props) => {
    return (
        <div className={styles.shopCategories}>
            <div className={styles.categoriesTitle}>Kategorije</div>
            {Object.keys(props.categories).map(
                category => <Link to='/shop' key={category} state={{ sentCategory: category }} className={styles.category} >
                    <div className={styles.categoryText} style={{backgroundColor: props.category===category ? '#DCC7AA' : '#F0E7DA'}} onClick={(e) => handleCategoryClick(e, category, props.category, props.setCategory, props.setCategoryParent)}>
                        {category}
                    </div>
                    {arrayToHtmlList(category, props.categories[category], props.category, props.setCategory, props.setCategoryParent)}
                </Link>)
            }
        </div>
    );
}

function handleCategoryClick(e, category, categoryState, setCategory, setCategoryParent) {
    for (let elem of e.target.parentNode.parentNode.children) {
        if (elem.firstChild.firstChild !== null) elem.firstChild.style.backgroundColor = '#F0E7DA';
    }
    e.target.style.backgroundColor = (category===categoryState) ? '#DCC7AA' : '#F0E7DA';
    setCategory(category);
    setCategoryParent('');
    return;
}

function arrayToHtmlList(parent, array, parentState, setCategory, setCategoryParent) {
    if (array.length === 0) return;
    else {
        let maxHeightVal = (parent === parentState || array.includes(parentState)) ? '500px' : '0';
        return (<div style={{ maxHeight: maxHeightVal }} className={styles.subCategoryList} >{
            array.map(elem => <div key={elem} style={{backgroundColor: parentState===elem ? '#DCC7AA' : '#F0E7DA'}} className={styles.subCategory} onClick={() => { setCategory(elem); setCategoryParent(parent); }} >
                {elem}
            </div>)
        }</div>);
    }
}

export default ShopCategories