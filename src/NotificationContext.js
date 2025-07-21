import { createContext, useReducer } from 'react';

const NotificationContext = createContext();

const initialState = { message: '', type: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'SHOW':
      return { message: action.payload.message, type: action.payload.type };
    case 'HIDE':
      return { message: '', type: '' };
    default:
      return state;
  }
}

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
