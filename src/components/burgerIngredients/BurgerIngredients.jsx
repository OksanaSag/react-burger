import React, { useState } from 'react';
import BurgerIngredientsStyles from './BurgerIngredients.module.css';
import IndredientTabs from '../IndredientTabs/IndredientTabs';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import InredientList from '../InredientList/InredientList';
import PropTypes from 'prop-types';

export default function BurgerIngredients  ({data}){  
    const bunArray = data.filter(item => item.type === 'bun')
    const sauceArray = data.filter(item => item.type === 'sauce')
    const mainArray = data.filter(item => item.type === 'main')  
    const [open, setOpen] = useState(false)
    const [info, setInfo] = useState()

    function openOrderDetails (value) {
        setOpen(true)
        setInfo(value)
    }

    return (
        <div>
            <h1 className={'pt-10 pb-5 text text_type_main-large'}>Соберите бургер</h1>
            <div><IndredientTabs/></div>
            <section  id='containerElement' className={BurgerIngredientsStyles.burgerIngredient}>
                <h2 className={' text text_type_main-medium'} id='bun'>Булки</h2>
                <ul  className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'}>
                    {bunArray?.map((item) => (
                        <li onClick={() => openOrderDetails(item)} style={{ listStyleType: 'none'}} key={item._id}>
                            <InredientList {...item} key={item._id} />
                        </li>
                        ))
                    }
                </ul>
                <h2 className={' text text_type_main-medium'} id='sauce'>Соусы</h2>
                <ul className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'}>
                    {sauceArray?.map((item) => (
                        <li onClick={() => openOrderDetails(item)} style={{ listStyleType: 'none'}} key={item._id}>
                            <InredientList {...item} key={item._id} />
                        </li>
                        ))
                    }
                </ul>
                <h2 className={' text text_type_main-medium'} id='main'>Начинки</h2>
                <ul className={BurgerIngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'}>
                    {mainArray?.map((item) => (
                        <li onClick={() => openOrderDetails(item)} style={{ listStyleType: 'none'}} key={item._id}>
                            <InredientList {...item} key={item._id} />
                        </li>
                        ))
                    }
                </ul>
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