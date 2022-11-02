import React from 'react';
import {data} from '../utils/data';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IndredientTabs from '../IndredientTabs/IndredientTabs';

export default function BurgerIngredients  (){      
    const bunArray = data.filter(item => item.type === 'bun')
    const sauceArray = data.filter(item => item.type === 'sauce')
    const mainArray = data.filter(item => item.type === 'main')
    const bunList = bunArray.map((item) => {
            return (
                <div key={item._id} className={BurgerIngredientsStyles.section}>
                    <img src={item.image} className={BurgerIngredientsStyles.categories} alt="" />
                    <Counter count={item.__v} size={item.__v <= 9 ? 'default' : 'small'}/>
                    <div className={BurgerIngredientsStyles.fat + ' pt-1 pb-1'}>
                        <span style={{ fontFamily: 'Iceland', fontSize: '28px'}}>{item.fat}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p>{item.name}</p>
                </div>
            )
    })
    const sauceList = sauceArray.map((item) => {
        return (
            <div key={item._id} className={BurgerIngredientsStyles.section}>
                <img src={item.image} className={BurgerIngredientsStyles.categories} alt="" />
                <Counter count={item.__v} size={item.__v <= 9 ? 'default' : 'small'} />
                <div className={BurgerIngredientsStyles.fat + ' pt-1 pb-1'}>
                    <span style={{ fontFamily: 'Iceland', fontSize: '28px'}}>{item.fat}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <p>{item.name}</p>
            </div>
        )
    })
    const mainList = mainArray.map((item) => {
        return (
            <div key={item._id} className={BurgerIngredientsStyles.section}>
                <img src={item.image} className={BurgerIngredientsStyles.categories} alt="" />
                <Counter count={item.__v} size={item.__v <= 9 ? 'default' : 'small'} />
                <div className={BurgerIngredientsStyles.fat + ' pt-1 pb-1'}>
                    <span style={{ fontFamily: 'Iceland', fontSize: '28px'}}>{item.fat}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <p>{item.name}</p>
            </div>
        )
    })
    return (
        <div>
            <div>
                <h1 className={'pt-10 pb-5 text text_type_main-large'}>Соберите бургер</h1>
                <div><IndredientTabs/></div>
                <div id="containerElement" className={BurgerIngredientsStyles.burgerIngredient}>
                <h2 className={' text text_type_main-medium'} id='bun'>Булки</h2>
                <section className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'}>{bunList}</section>
                <h2 className={' text text_type_main-medium'} id='sauce'>Соусы</h2>
                <section className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'}>{sauceList}</section>
                <h2 className={' text text_type_main-medium'} id='main'>Начинки</h2>
                <section className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'}>{mainList}</section>
                </div>
            </div>
        </div>
    )
       
}
  