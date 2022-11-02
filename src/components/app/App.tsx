import React from 'react';
import './App.css';
import AppHeader from '../header/AppHeader';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients'
import BurgerConstructor from '../burgerConstructor/BurgerConstructor'

function App() {
  
  return (
    <>
      <header className="App-header">
        <AppHeader />
      </header>
      <main className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </>
  );
}
export default App;
