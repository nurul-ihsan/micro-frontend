export const registeractions = {
  ADD_TOKEN_REQUEST: 'ADD_TOKEN_REQUEST',
  ADD_TOKEN_SUCCESS: 'ADD_TOKEN_SUCCESS',
  ADD_TOKEN_FAILURE: 'ADD_TOKEN_FAILURE',
  LOGOUT: 'LOGOUT',
  // REMOVE_TOKEN_REQUEST: "REMOVE_TOKEN_REQUEST",
  // REMOVE_TOKEN_SUCCESS: "REMOVE_TOKEN_SUCCESS",
  // REMOVE_TOKEN_FAILURE: "REMOVE_TOKEN_FAILURE",
};

// to avoid spelling mistake we store it in the variable.
export const addtokenreq = () => {
  return {
    type: registeractions.ADD_TOKEN_REQUEST,
  };
};

export const addtokenres = (token) => {
  return {
    type: registeractions.ADD_TOKEN_SUCCESS,
    payload: token,
  };
};

export const addtokenerr = () => {
  return {
    type: registeractions.ADD_TOKEN_FAILURE,
  };
};

export const logout = () => ({ type: 'LOGOUT' });

export const getusertoken =
  ({ userlogin, onClose }) =>
  (dispatch) => {
    dispatch(addtokenreq());
    console.log(userlogin);
    alert('Logged In Successful');
    localStorage.setItem('tvappletoken', JSON.stringify('token'));
    return dispatch(addtokenres('token'));
    // if (res.data.error == false) {
    //     onClose()
    // }
  };

export const removeuser = () => {
  return {
    type: registeractions.REMOVE_TOKEN_REQUEST,
    payload: '',
  };
};

export const signout = () => (dispatch) => {
  dispatch(removeuser());
  localStorage.setItem('tvappletoken', JSON.stringify(''));
};
