import React, { useRef } from "react";
import InredientList from '../InredientList/InredientList';
import IngredientsStyles from './Ingredients.module.css';

export default function Ingredients ({refEl, array, openOrderDetails}) {
    return (
 <ul  className={IngredientsStyles.tabs + ' pt-6 pb-10 pl-4 text text_type_main-default'} ref={refEl}>
    {array?.map((item) => (
        <li className={IngredientsStyles.list} onClick={() => openOrderDetails(item)} key={item._id} >
            <InredientList {...item} key={item._id} />
        </li>
        ))
 }
</ul>
    )
}