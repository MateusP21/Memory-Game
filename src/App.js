import React, { useEffect } from 'react';

import { GlobalStyle } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import Routers from './Routes';
import { useDispatch } from 'react-redux';
import Firebase from './utils/firebaseUtils';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: 'USER_SIGNED', payload: user.providerData });
      } else {
        dispatch({ type: 'USER_SIGNOUT' });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routers />
      <GlobalStyle />
    </div>
  );
}
