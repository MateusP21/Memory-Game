import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBs_YdRyZHo4ZEvwXDUfLqVJojb3NKsImg',
  authDomain: 'jogodamemoria-15f9b.firebaseapp.com',
  databaseURL: 'https://jogodamemoria-15f9b.firebaseio.com',
  projectId: 'jogodamemoria-15f9b',
  storageBucket: 'jogodamemoria-15f9b.appspot.com',
  messagingSenderId: '985169275373',
  appId: '1:985169275373:web:129eeb504f9c1a409b5fe4',
  measurementId: 'G-5L22S5HV01',
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
