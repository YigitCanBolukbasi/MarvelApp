export default function reducer(state, action) {
  switch (action.type) {
    case 'dark':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
