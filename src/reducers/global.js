const defaultState = {
  currentMenu: "all"
};

const global = (state = defaultState, action) => {
  switch (action.type) {
  case 'CHANGE_MENU':
      return Object.assign({},
        state,
        {
          currentMenu: action.payload
        });
    default:
      return state;
  }
};

export default global;
