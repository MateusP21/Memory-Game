import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import Lottie from 'react-lottie';
import cardGameAnimation from '../../lotties/15998-flip-card.json';
import Firebase from '../../utils/firebaseUtils';

import { LoginContainer } from './styles';

function Login() {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cardGameAnimation,

  };
  return (
    <LoginContainer>
      <Lottie options={defaultOptions} width={600} height={400} />
      <h1 className="title">JOGO DA MEMORIA</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Firebase.auth()} />
    </LoginContainer>
  );
}

export default Login;
