import firebase from 'firebase'

var config = {
    apiKey: 'AIzaSyDJ4zPlYlejc7kGJd9H54kL86iFtPCr1Lw',
    authDomain: 'catpost-e8e41.firebaseapp.com',
    databaseURL: 'https://catpost-e8e41.firebaseio.com',
    projectId: 'catpost-e8e41',
    storageBucket: 'catpost-e8e41.appspot.com', 
    messagingSenderId: '492864068860'
};
  firebase.initializeApp(config);

export default {
    database: firebase.database()
}

