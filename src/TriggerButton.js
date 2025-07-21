import React, { useContext } from 'react';
import NotificationContext from './NotificationContext';

function TriggerButton() {
  const { dispatch } = useContext(NotificationContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() =>
          dispatch({ type: 'SHOW', payload: { message: 'Success!', type: 'success' } })
        }
      >
        Show Success
      </button>

      <button
        onClick={() =>
          dispatch({ type: 'SHOW', payload: { message: 'Something went wrong.', type: 'error' } })
        }
        style={{ marginLeft: '10px' }}
      >
        Show Error
      </button>
    </div>
  );
}

export default TriggerButton;
