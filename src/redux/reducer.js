const INITIAL_STATE = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    number: 12345,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    number: 12345,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    number: 12345,
  },
];

export default (state = INITIAL_STATE, action) => {
  //
  switch (action.type) {
    case 'INITILIZE':
      return action.payload;
  }
  //
  switch (action.type) {
    case 'SET_TODOS':
      return [action.payload, ...state];
  }
  //
  switch (action.type) {
    case 'DELETE_TODOS': {
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
