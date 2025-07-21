import React, { useContext, useEffect } from 'react';
import NotificationContext from './NotificationContext';

function Notification() {
  const { state, dispatch } = useContext(NotificationContext);

  useEffect(() => {
    if (state.message) {
      const timer = setTimeout(() => {
        dispatch({ type: 'HIDE' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.message]);

  if (!state.message) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      backgroundColor: state.type === 'error' ? '#f87171' : '#34d399',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '6px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      {state.message}
    </div>
  );
}

export default Notification;
