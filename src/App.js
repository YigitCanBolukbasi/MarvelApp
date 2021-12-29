import React from 'react';

import FavoritesProvider from './Context/FavoritesContext/FavoritesProvider';
import Navigation from './navigation';
import ThemeProvider from './Context/ThemeContext/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Navigation />
      </FavoritesProvider>
    </ThemeProvider>
  );
}
