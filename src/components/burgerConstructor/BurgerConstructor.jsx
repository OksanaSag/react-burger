import React, {useState} from 'react';
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import ListIngredients from '../listIngredients/ListIngredients';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetail from '../OrderDetails/OrderDetails'
import Modal from'../Modal/Modal'

export default function BurgerConstructor ({data}) {
    const [open, setOpen] = useState(false)
    function openOrderDetails () {
        setOpen(true)
    }
    function getRandomId(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }
    const total = 1000;
    const bun = data.find(element => element.type === 'bun')
    const ingredients = data.filter(element => element.type !== 'bun')
   
    return (
            <div className={BurgerConstructorStyles.container + ' pl-4'}>
                <ListIngredients bun={bun} ingredients={ingredients} />
                <div className={BurgerConstructorStyles.totalPrice + ' pt-10 mr-4'}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <span style={{ fontFamily: 'Iceland', fontSize: '48px'}}>{total}</span>
                        <CurrencyIcon type="primary" height="33"/>
                    </div>
                    <Button htmlType="button" type="primary" size="large" onClick={openOrderDetails}>
                        Оформить заказ
                    </Button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <OrderDetail orderId={getRandomId(99999, 1000000)}/>
                    </Modal>
                </div>
            </div>
    )
}
