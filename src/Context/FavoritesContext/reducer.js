export default function (state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const selectedComic = action.payload.comic;

      const currentFavoriteComic = state.favoritesList.findIndex(
        item => item.id === selectedComic.id,
      );

      const isInFavorite = currentFavoriteComic !== -1;

      if (isInFavorite) {
        return state;
      }

      const updatedFavorites = [...state.favoritesList, selectedComic];
      return {...state, favoritesList: updatedFavorites};
    }

    case 'DELETE_FROM_FAVORITES': {
      const selectedComic = action.payload.comic;

      const comicFavoritesIndex = state.favoritesList.findIndex(
        item => item.id === selectedComic.id,
      );

      const updatedFavoritesList = [...state.favoritesList];
      updatedFavoritesList.splice(comicFavoritesIndex, 1);
      return {...state, favoritesList: updatedFavoritesList};
    }

    default:
      return state;
  }
}
