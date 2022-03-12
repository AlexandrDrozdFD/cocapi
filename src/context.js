import React, { useContext, useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('zo');
  const [cocktails, setCocktails] = useState([]);
  console.log(cocktails);
  console.log(searchTerm);

  const fetchCocktails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(drinks);

      if (drinks) {
        let ourCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } = drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
          }
        });
        setCocktails(ourCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    }
    catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm])

  return (
    <AppContext.Provider value={
      {
        loading,
        cocktails,
        setSearchTerm
      }
    }>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
