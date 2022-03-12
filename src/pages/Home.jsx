import React from 'react';
import CocktailList from '../components/CocktailList/CocktailList';
import SearchForm from '../components/SearchForm/SearchForm';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
};

export default Home;
