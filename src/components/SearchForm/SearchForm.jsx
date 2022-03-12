import React from 'react';
import { useGlobalContext } from '../../context';
import './SearchForm.css';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('yoh');

  const searchCocktail = () => {
    let value = searchValue.current.value;
    setSearchTerm(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">choose your favorite cocktail</label>
          <input
            type="text"
            ref={searchValue}
            onChange={searchCocktail}
            autoFocus
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;