import {DarkTheme} from '@react-navigation/native';

export default function reducer(state, action) {
  switch (key) {
    case 'DARKTHEME_ON':
      const hour = new Date().getHours();
      const minute = new Date().getMinutes();
      if ((hour >= 20 && minute >= 1) || hour <= 5) {
        return IsDarkTheme(DarkTheme);
      }

    default:
      return state;
  }
}
