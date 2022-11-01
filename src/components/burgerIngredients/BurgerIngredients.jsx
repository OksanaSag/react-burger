import React from 'react';
import {data} from '../utils/data';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-scroll';

export default function BurgerIngredients  (){   
    const List1 = () => {
        const [current, setCurrent] = React.useState('one')
        return (
            <nav className={'pt-5 pb-10'} style={{ display: 'flex' }}>
                <Link containerId="containerElement" to="bun" spy={true} smooth={true}>
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                        Булки
                    </Tab>
                </Link>
                <Link containerId="containerElement" to="sauce" spy={true} smooth={true}>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                </Link>
                <Link containerId="containerElement" to="main" spy={true} smooth={true}>
                    <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                        Начинки
                    </Tab>
                </Link>
            </nav>
        )
    }
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
                <div><List1/></div>
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
  