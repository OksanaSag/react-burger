import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from '../header/AppHeader';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import BurgerConstructor from '../burgerConstructor/BurgerConstructor';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../ErrorFallback/ErrorFallback';
import { useDispatch } from "react-redux";
import { menuList } from "../../services/actions/menuList";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {useSelector} from "react-redux";

export default function App() {
  const {itemsGet, itemsGeting } = useSelector(store => store.menu)
  const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(menuList());
    }, [dispatch])
    return (
      <>
        <header className="App-header">
          <AppHeader />
        </header>
        <main className="main">
            {!itemsGet && <ErrorFallback/>}
              <ErrorBoundary FallbackComponent={ErrorFallback}>
              <DndProvider backend={HTML5Backend}>
              {itemsGeting ? (<span className="getMassage">. . . загрузка</span>) :
              <>
                <BurgerIngredients />
                <BurgerConstructor />
              </>
              }         
              </DndProvider>
              </ErrorBoundary>
        </main>
      </>
    );
}