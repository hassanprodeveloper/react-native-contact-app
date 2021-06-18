// this function get data from splash screen from local storage and set the data in redux store
const initilizeContact = (data) => {
    return (dispatch) => {
      dispatch({type: 'INITILIZE', payload: data});
    };
  };
  // this function add contact in contact list in redux store
  export const addContactData = (data) => {
    return (dispatch) => {
      dispatch({type: 'SET_CONTACT', payload: data});
    };
  };
  // this function is used for deleting data from list
  const deleteTodo = (data) => {
    return (dispatch) => {
      dispatch({type: 'DELETE_CONTACT', payload: data});
    };
  };
  // this function is used for deleting data from list
  const resetTodo = (data) => {
    return (dispatch) => {
      dispatch({type: 'RESET_CONTACT', payload: data});
    };
  };
  // this function update the status of todos
  const todoStatus = (data) => {
    return (dispatch) => {
      dispatch({type: 'SET_CONTACT_STATUS', payload: data});
    };
  };
  
  