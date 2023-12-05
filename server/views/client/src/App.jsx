import { RouterProvider } from 'react-router-dom';
import routes from '@common/routing';
import { useState } from 'react';
import AppContext from '@context/index';

export default function App() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const handleSetSearch = (value) => {
    setSearch(value);
  };
  const handleSetCategory = (value) => {
    setCategory(value);
  };

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ search, category, handleSetCategory, handleSetSearch }}
    >
      <RouterProvider router={routes} />;
    </AppContext.Provider>
  );
}
