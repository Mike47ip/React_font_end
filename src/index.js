import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';  // Import configureStore
import reducer from './reducer';
import App from './App';
import  fetchRandomGreeting  from './actions';


const store = configureStore({
  reducer: reducer,
});

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// Dispatch an initial action (optional)
store.dispatch(fetchRandomGreeting());
