import React from 'react';
import Loading from './Loading/Loading';
import Cocktail from '../components/Cocktail';
import { useGlobalContext } from '../context';


const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria 
      </h2>
    );
  }

  return (
    <h1>CocktailList</h1>
  );
}

export default CocktailList;