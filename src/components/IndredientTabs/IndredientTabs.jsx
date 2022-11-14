import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-scroll';

export default function IndredientTabs () {
    const [current, setCurrent] = React.useState('one')
    return (
        <nav className={'pt-5 pb-10'} style={{ display: 'flex' }}>
            <Link containerId="containerElement" to="bun" spy={true} smooth={true}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
            </Link>
            <Link containerId="containerElement" to="sauce" spy={true} smooth={true}>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
            </Link>
            <Link containerId="containerElement" to="main" spy={true} smooth={true}>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </Link>
        </nav>
    )
}