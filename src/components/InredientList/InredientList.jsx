import React from 'react';
import InredientListStyles from './InredientList.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";

export default function InridientList (item){
    const [,dragRef] = useDrag({
        type: 'ingredient',
        item: item,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });
    return (
        <div key={item._id} className={InredientListStyles.section} ref={dragRef}>
                <img  src={item.image} className={InredientListStyles.categories} alt="" />
                <Counter count={item.__v} size={item.__v <= 9 ? 'default' : 'small'}/>
                <div className={InredientListStyles.fat + ' pt-1 pb-1'}>
                    <span style={{ fontFamily: 'Iceland', fontSize: '28px'}}>{item.fat}</span>
                    <CurrencyIcon type='primary' />
                </div>
                <p>{item.name}</p>
            </div>
    )
}

InridientList.propTypes = {
    _id: PropTypes.string,
    image: PropTypes.string,
    __v: PropTypes.number,
    fat: PropTypes.number,
    name: PropTypes.string
}