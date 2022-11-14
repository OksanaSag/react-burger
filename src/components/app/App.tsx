import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from '../header/AppHeader';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import BurgerConstructor from '../burgerConstructor/BurgerConstructor';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../ErrorFallback/ErrorFallback';
import {getUrl} from '../utils/api'

export default function App() {
  const [state, setState] = useState({
    isLoaded: false,
    hasError: false,
    data: []
  });

  useEffect(() => {
    const getIngredients = async () => {
      setState({ data: [], hasError: false, isLoaded: false });
      await getUrl()
        .then(res => {setState({ data: res.data, hasError: false, isLoaded: true })
      })
        .catch(err => {
          setState({ ...state, hasError: true, isLoaded: false });
          console.error(err)})
    };
    getIngredients()
  }, []);

  return (
    <>
      <header className="App-header">
        <AppHeader />
      </header>
      <main className="main">
          {state.hasError &&  
            <ErrorFallback/>}
            <ErrorBoundary FallbackComponent={ErrorFallback}>
          {state.isLoaded && <BurgerIngredients data={state.data}/>}
          {state.isLoaded && <BurgerConstructor data={state.data}/>}
            </ErrorBoundary>
      </main>
    </>
  );
}