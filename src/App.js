import React from 'react';

import FavoritesProvider from './Context/FavoritesContext/FavoritesProvider';
import Navigation from './navigation';

export default function App() {
  return (
    <FavoritesProvider>
      <Navigation />
    </FavoritesProvider>
  );
}
