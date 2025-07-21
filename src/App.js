import React from 'react';
import { NotificationProvider } from './NotificationContext';
import Notification from './Notification';
import TriggerButton from './TriggerButton';

function App() {
  return (
    <NotificationProvider>
      <Notification />
      <TriggerButton />
    </NotificationProvider>
  );
}

export default App;
