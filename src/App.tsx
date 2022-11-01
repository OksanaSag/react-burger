import React from 'react';
import { data } from "./components/utils/data";
import './App.css';
import AppHeader from './components/header/AppHeader';
import BurgerIngredients from './components/burgerIngredients/BurgerIngredients'
import BurgerConstructor from './components/burgerConstructor/BurgerConstructor'

function App() {
  const bun = data.find(element => element.type === 'bun')
  const ingredients = data.filter(element => element.type !== 'bun')
  return (
    <>
      <header className="App-header">
        <AppHeader />
      </header>
      <main className="main">
        <BurgerIngredients />
        <BurgerConstructor bun={bun} ingredients={ingredients} />
      </main>
    </>
  );
}
export default App;
