import React, {useState, useContext, useReducer } from 'react';
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import ListIngredients from '../listIngredients/ListIngredients';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetail from '../OrderDetails/OrderDetails'
import Modal from'../Modal/Modal'
import { Context } from '../Context/Context';

export default function BurgerConstructor () { 
    const data = useContext(Context);
    const [open, setOpen] = useState(false);
    const [orderNumber, setOrderNumber] = useState(0);
    const getBun = (data) => data.find(element => element.type === 'bun')
    const getIngredients = (data) => data.filter(element => element.type !== 'bun')
    const [bun, setBun] = useState(getBun(data))
    const [ingredients, setIngredients] = useState(getIngredients(data))
    const initialState = { price: 0 };

    function totalPrice(state, action){
        switch(action.type){
            case "increment": return { price: state.price + state };
            case "decrement": return { price: state.price - state };
            default: return state;
        }
    }
    const [state] = useReducer(totalPrice, initialState, () => {
        return (bun.price*2 + ingredients.reduce((prev, value) => prev + value.price, 0))
    })

    function getOrderDedails () {
       return fetch('https://norma.nomoreparties.space/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ingredients: [...ingredients.map(item => item._id), bun._id] })
        })
            .then((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Error ${res.status}`)
            })
            .then(res => {
                setOrderNumber(res.order.number)
                setOpen(true)
            })
            .catch(err => {console.log(err)})
    }

    return (
            <div className={BurgerConstructorStyles.container + ' pl-4'}>
                <ListIngredients bun={bun} ingredients={ingredients} />
                <div className={BurgerConstructorStyles.totalPrice + ' pt-10 mr-4'}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <span style={{ fontFamily: 'Iceland', fontSize: '48px'}}>{state}</span>
                        <CurrencyIcon type="primary" height="33"/>
                    </div>
                    <Button htmlType="button" type="primary" size="large" onClick={getOrderDedails}>
                        Оформить заказ
                    </Button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <OrderDetail orderId={orderNumber}/>
                    </Modal>
                </div>
            </div>
    )
}
