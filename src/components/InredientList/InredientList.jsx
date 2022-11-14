import React from 'react';
import InredientListStyles from './InredientList.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export default function InridientList (item){
    return (
        <div key={item._id} className={InredientListStyles.section}>
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