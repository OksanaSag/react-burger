import React, { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ListIngredients from "../listIngredients/ListIngredients";
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorStyle from './BurgerConstructor.module.css';
import OrderDetail from '../OrderDetails/OrderDetails'
import Modal from "../Modal/Modal"
import { useDispatch, useSelector } from "react-redux";
import { ADD_INGREDIENTS, CLOSE_ORDER_MODAL, createOrder, DELETE_INGREDIENT, MOVE_INGREDIENT } from "../../services/actions/orderList";

export default function BurgerConstructor () {
    const dispatch = useDispatch();
    const order = useSelector(store => store.order);
    const price = order.price;
    const mains = order.ingredients;
    const bun = order.bun;
    const addBun = Object.keys(bun).length !== 0;
    const [open, setOpen] = useState(false);
    const [, drop] = useDrop({
        accept: "ingredient",
        drop(ingredient) {
            dispatch({
                type: ADD_INGREDIENTS,
                ingredient: { ...ingredient, key: ingredient._id }
            });
        },
    });
    
    const openOrderModal = () => {
        dispatch(createOrder(order.ordersId));
        setOpen(true)
    }
    const closeOrderModal = () => {
        dispatch({ type: CLOSE_ORDER_MODAL });
    }
    const moveIngredient = useCallback((dragIndex, hoverIndex) => {
        dispatch({ type: MOVE_INGREDIENT, dragIndex, hoverIndex });
    }, [dispatch]);
    const handleDelete = (key) => {
        dispatch({ type: DELETE_INGREDIENT, key });
    }

    return (
        <section className={BurgerConstructorStyle.container} ref={drop}>
            {addBun ? (
                 <ConstructorElement
                 key={bun.key}
                 ingredient={bun}
                 text={bun.name + ' (верх)'}
                 thumbnail={bun.image}
                 isLocked={true}
                 price={bun.price}
                 type='top'
                 moveIngredient={() => { }}
                 extraClass="ml-5"
             />
            ) : (<ConstructorElement
                key={bun._id}
                   text={''}
                   isLocked
                   type="top"
                   extraClass="ml-5"
               />)
            }
            <div className={BurgerConstructorStyle.listIngredient}>
                {mains.map((element, index) => {
                    return ( 
                    <li style={{ display: 'flex', alignItems: 'center'}} key={element._id}>     
                         <ListIngredients
                             key={element._id}
                             index={index}
                             ingredient={element}
                             isLocked={false}
                             moveIngredient={moveIngredient}
                             handleClose={handleDelete}
                         />
                     </li>);
                })}
            </div>
            {addBun ? (
                <div >
                    <ConstructorElement
                    text={bun.name + ' (низ)'}
                    thumbnail={bun.image}
                    price={bun.price}
                    isLocked
                    type="bottom"
                    extraClass="ml-5"
                    moveIngredient={() => { }}
                />
                </div>
            ) : (<ConstructorElement
                key={bun._id}
                   text={''}
                   price={bun.price}
                   isLocked
                   type="bottom"
                   extraClass="ml-5"
               />)
            }
            <div className={BurgerConstructorStyle.totalPrice}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                <span style={{ fontFamily: 'Iceland', fontSize: '48px'}}>{price}</span>
                <CurrencyIcon type="primary" height="33"/>
                </div>
                <Button type="primary" size="large" onClick={openOrderModal} disabled={!order.activeButton} htmlType='submit'>
                    Оформить заказ
                </Button>
            </div>
            {order.openModalIngredient && 
                <Modal open={open}  onClose={closeOrderModal}>
                    <OrderDetail orderId={order.orderNumber} />
                </Modal>
            }
        </section>
        
    )
};