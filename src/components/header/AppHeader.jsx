import React from 'react';
import AppHeaderStyles from './AppHeader.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
    return (
      <header className={AppHeaderStyles.header}>
        <nav>
          <ul className={AppHeaderStyles.menu}>
            <li className={AppHeaderStyles.item}>
              <a href='constructor'  className={AppHeaderStyles.link + ' ' + AppHeaderStyles.active + ' pt-4 pr-5 pb-4 pl-5 text text_type_main-default text_color_inactive'}>
                <BurgerIcon type="primary"/>
                Конструктор
              </a>
            </li>
            <li className={AppHeaderStyles.item}>
              <a href='timeline' className={AppHeaderStyles.link + ' pt-4 pr-5 pb-4 pl-5 text text_type_main-default text_color_inactive'}>
                <ListIcon type="secondary"/>
                Лента заказов
              </a>
            </li>
          </ul>
        </nav>
        <Logo/>
        <a href='login' className={AppHeaderStyles.link + ' ' + AppHeaderStyles.login + ' pt-4 pr-5 pb-4 pl-5 text text_type_main-default text_color_inactive'}>
          <ProfileIcon type="secondary" />
          Личный кабинет
        </a>
    </header>
    )
}

