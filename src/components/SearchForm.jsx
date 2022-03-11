import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div>It is SearchForm</div>
  );
}

export default SearchForm;