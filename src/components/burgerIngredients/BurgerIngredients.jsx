import React, { useState, useEffect } from 'react';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import InredientList from '../InredientList/InredientList';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-scroll';
import {useInView} from 'react-intersection-observer'

export default function BurgerIngredients  (){  
    const ingredients = useSelector(store => store.menu.items);
    const bunArray = ingredients.filter(item => item.type === 'bun')
    const sauceArray = ingredients.filter(item => item.type === 'sauce')
    const mainArray = ingredients.filter(item => item.type === 'main')  
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState()
    const [current, setCurrent] = React.useState('one')
    const THRESHOLD = [0.25, 0.5, 0.75]
    const [bunRef, inViewBun] = useInView({ threshold: THRESHOLD });
    const [sauceRef, inViewSauce] = useInView({ threshold: THRESHOLD });
    const [mainRef, inViewMain] = useInView({ threshold: THRESHOLD });

    function openOrderDetails (value) {
        setOpen(true)
        setInfo(value)
    }
    useEffect(() => {
        if (inViewBun) {
            setCurrent('one');
        } else if (inViewSauce) {
            setCurrent('two');
        } else if (inViewMain) {
            setCurrent('three');
        }
    }, [inViewBun, inViewSauce, inViewMain]);

    return (
        <div>
            <h1 className={'pt-10 pb-5 text text_type_main-large'}>Соберите бургер</h1>
            <div>
            <nav className={'pt-5 pb-10'} style={{ display: 'flex' }}>
            <Link containerId="containerElement" to="bun" spy={true} smooth={true}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent} inViewBun={inViewBun}>
                    Булки
                </Tab>
            </Link>
            <Link containerId="containerElement" to="sauce" spy={true} smooth={true}>
                <Tab value="two" active={current === 'two'} onClick={setCurrent} inViewBun={inViewSauce}>
                    Соусы
                </Tab>
            </Link>
            <Link containerId="containerElement" to="main" spy={true} smooth={true}>
                <Tab value="three" active={current === 'three'} onClick={setCurrent} inViewBun={inViewMain}>
                    Начинки
                </Tab>
            </Link>
        </nav>
            </div>
            <section  id='containerElement' className={BurgerIngredientsStyles.burgerIngredient}>
                <h2 className={' text text_type_main-medium'} id='bun'>Булки</h2>
                <a name='one'>
                <ul  className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'} ref={bunRef}>
                    {bunArray?.map((item) => (
                        <li onClick={() => openOrderDetails(item)} style={{ listStyleType: 'none'}} key={item._id} >
                            <InredientList {...item} key={item._id} />
                        </li>
                        ))
                    }
                </ul>
                </a>
                <h2 className={' text text_type_main-medium'} id='sauce'>Соусы</h2>
                <a name='sauce'>
                <ul className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'} ref={sauceRef}>
                    {sauceArray?.map((item) => (
                        <li onClick={() => openOrderDetails(item)} style={{ listStyleType: 'none'}} key={item._id}>
                            <InredientList {...item} key={item._id} />
                        </li>
                        ))
                    }
                </ul>
                </a>
                <h2 className={' text text_type_main-medium'} id='main'>Начинки</h2>
                <a name='main'>
                <ul className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'} ref={mainRef}>
                    {mainArray?.map((item) => (
                        <li onClick={() => openOrderDetails(item)} style={{ listStyleType: 'none'}} key={item._id}>
                            <InredientList {...item} key={item._id} />
                        </li>
                        ))
                    }
                </ul>
                </a>
            </section>
            <Modal title='Детали ингредиента' open={open} onClose={() => setOpen(false)}>
            <IngredientDetails data={info} />
            </ Modal>
        </div>
    )
}
  
BurgerIngredients.propTypes = {
    _id: PropTypes.string,
    type: PropTypes.string
}