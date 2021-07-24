import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyB9yhFK9i42rIWMLiwtLNstzgxmm96pUbc',
  authDomain: 'booksanta-bb68a.firebaseapp.com',
  projectId: 'booksanta-bb68a',
  storageBucket: 'booksanta-bb68a.appspot.com',
  messagingSenderId: '1019399342605',
  appId: '1:1019399342605:web:33c04b3dd390482b216344',
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
