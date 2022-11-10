import React from 'react';
import InridientListStyles from './InridientList.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

export default function InridientList (item){
    return (
        <div key={item._id} className={InridientListStyles.section}>
                <img  src={item.image} className={InridientListStyles.categories} alt="" />
                <Counter count={item.__v} size={item.__v <= 9 ? 'default' : 'small'}/>
                <div className={InridientListStyles.fat + ' pt-1 pb-1'}>
                    <span style={{ fontFamily: 'Iceland', fontSize: '28px'}}>{item.fat}</span>
                    <CurrencyIcon type='primary' />
                </div>
                <p>{item.name}</p>
            </div>
    )
}