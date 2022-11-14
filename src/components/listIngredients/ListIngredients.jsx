import React from 'react';
import PropTypes from "prop-types";
import ListIngredientsStyles from './ListIngredients.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientTypes } from '../utils/ingredientTypes';

export default function ListIngredients ({ ingredients, bun }) {
    return (
        <div>
            {bun && 
                <ConstructorElement
                    text={bun.name + ' (верх)'}
                    thumbnail={bun.image}
                    price={bun.price}
                    isLocked
                    type="top"
                    extraClass="mt-25 ml-8"
                />
            }
            <ul className={ListIngredientsStyles.listIngredient + ' mb-4 mt-4'}>
                {
                    ingredients?.map((item) => (
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
                    isLocked
                    type="bottom"
                    extraClass="ml-8"
                />
            }
        </div>
    )
    }
    export const ingredientPropTypes = {
        ingredients: PropTypes.arrayOf( PropTypes.shape(ingredientTypes)),
        bun: PropTypes.shape(ingredientTypes)
    }
    ListIngredients.propTypes = ingredientPropTypes