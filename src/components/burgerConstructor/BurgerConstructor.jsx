import React from 'react';
import BurgerConstructorStyles from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor ({ ingredients, bun }) {
    const total = 1000;
    const ListIngredients = () => {
    return (
        <div>
            {bun && 
                <ConstructorElement
                    text={bun.name + ' (верх)'}
                    thumbnail={bun.image}
                    price={bun.price}
                    isLocked={true}
                    type="top"
                    extraClass="mt-25 ml-8"
                />
            }
            <ul className={BurgerConstructorStyles.burgerIngredient + ' mb-4 mt-4'}>
                {ingredients &&
                    ingredients.map((item) => (
                        <li style={{ display: 'flex', alignItems: 'center'}} key={item._id}>
                            <DragIcon />
                            <ConstructorElement
                                text={item.name}
                                thumbnail={item.image}
                                price={item.price}
                                extraClass="ml-2"
                            />
                        </li>
                    ))
                }
            </ul>
            { bun &&
                <ConstructorElement
                    text={bun.name + ' (низ)'}
                    thumbnail={bun.image}
                    price={bun.price}
                    isLocked={true}
                    type="bottom"
                    extraClass="ml-8"
                />
            }
        </div>
    )
        }
    return (
        <>
            <div className={BurgerConstructorStyles.container + ' pl-4'}>
                <ListIngredients/>
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
