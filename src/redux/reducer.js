const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case `SET_PAGE_TITLE`:
        return {
          ...state,
          pageTitle: payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  