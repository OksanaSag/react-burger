import React from 'react';
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import ListIngredients from '../listIngredients/ListIngredients';
import { data } from "../utils/data";
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor () {
    const total = 1000;
    const bun = data.find(element => element.type === 'bun')
    const ingredients = data.filter(element => element.type !== 'bun')
   
    return (
        <>
            <div className={BurgerConstructorStyles.container + ' pl-4'}>
                <ListIngredients bun={bun} ingredients={ingredients} />
                <div className={BurgerConstructorStyles.totalPrice + ' pt-10 mr-4'}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <span style={{ fontFamily: 'Iceland', fontSize: '48px'}}>{total}</span>
                        <CurrencyIcon type="primary" height="33"/>
                    </div>
                    <Button htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </>
    )
}
