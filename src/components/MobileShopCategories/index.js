import React, { useState, useEffect, useRef } from 'react'
import styles from './style.module.css'

const MobileShopCategories = (props) => {
    const [isOpen, setIsOpen] = useState('0px');

    const categoryFrame = useRef(null);

    useEffect(() => {
        if (categoryFrame.current.style.maxHeight === '0px') {
            setTimeout(() => {
                categoryFrame.current.style.border = 'none';
            }, 500);
        }
        else categoryFrame.current.style.border = 'solid 2px #C4C4C4';
    })

    if (props.category === '') return (
        <div className={styles.mainSection}>
            <div className={styles.categoryButton} onClick={() => isOpen === '0px' ? setIsOpen('1000px') : setIsOpen('0px')}>Kategorije</div>
            <div ref={categoryFrame} style={{ maxHeight: isOpen }} className={styles.mobileCategories}>
                {Object.keys(props.categories).map(
                    category => <div key={category} className={styles.category} onClick={() => {
                        props.setCategoryParent('');
                        props.setCategory(category);
                        setIsOpen('0px');
                    }} style={{
                        borderTop: Object.keys(props.categories).indexOf(category) ? 'solid 2px #C4C4C4' : 'none'
                    }}>
                        <div style={{ display: 'list-item' }}>{category}</div>
                    </div>
                )}
            </div>
        </div>
    );
    else return (
        <div className={styles.mainSection}>
            <div className={styles.categoryButton} onClick={() => isOpen === '0px' ? setIsOpen('1000px') : setIsOpen('0px')}>Kategorije</div>
            <div ref={categoryFrame} style={{ maxHeight: isOpen }} className={styles.mobileCategories}>
                <div className={styles.backButton} onClick={() => {
                    setIsOpen('0px');
                    props.setCategory(props.categoryParent);
                    props.setCategoryParent('');
                }}>&#8249; Natrag</div>
                <div className={styles.categoryTitle} style={{ borderBottom: (props.categories[props.category] && props.categories[props.category].length != 0) ? 'solid 2px #C4C4C4' : '' }}>{props.category}</div>
                {props.categories[props.category] ? props.categories[props.category].map(
                    category => <div key={category} className={styles.category} onClick={() => {
                        props.setCategoryParent(props.category);
                        props.setCategory(category);
                        setIsOpen('0px');
                    }} style={{
                        borderTop: props.categories[props.category].indexOf(category) ? 'solid 2px #C4C4C4' : 'none'
                    }}>
                        <div style={{ display: 'list-item' }}>{category}</div>
                    </div>
                ) : ''}
            </div>
        </div>
    );
}

export default MobileShopCategories