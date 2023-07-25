import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import authReducer from './store/reducers';
import LoginPage from './components/LoginPage';
import UsersPage from './components/UsersPage';
import './App.css';

const store = createStore(authReducer);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <Provider store={store}>
      {isLoggedIn ? (
        <UsersPage handleLogout={() => setIsLoggedIn(false)} />
      ) : (
        <LoginPage handleLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </Provider>
  );
};

export default App;
