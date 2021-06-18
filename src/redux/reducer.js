const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  //
  switch (action.type) {
    case 'INITILIZE':
      return action.payload;
  }
  //
  switch (action.type) {
    case 'SET_CONTACT':
      return [action.payload, ...state];
  }
  //
  switch (action.type) {
    case 'DELETE_CONTACT': {
      const updatedState = state.filter((item) => item.id !== action.payload);
      return updatedState;
    }
  }
  //
  switch (action.type) {
    case 'SET_TODOS_STATUS': {
      const objID = state.findIndex((obj) => obj.id == action.payload.id);
      state[objID].done = action.payload.status;
      // console.log('todos reducer action #26', state);
      return state;
    }
  }
  //
  switch (action.type) {
    case 'RESET_TODOS': {
      return [];
    }
  }
  //
  return state;
};
