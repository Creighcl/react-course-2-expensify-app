import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//     .on('value',(snapshot) => {
//         const expenses = [];
        
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });



// database.ref('expenses').push({
//     description: 'Mortgage',
//     amount: 80000,
//     createdAt: 32432,
//     note: 'Last Month'
// });


// database.ref('notes/-L275S74POrrNn9O5GCM').remove();


// database.ref('notes').push({
//     title: 'Do Stuff',
//     body: 'anything'
// });


// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(38);
// }, 3500);

// database.ref('location/city').once('value').then((snapshot) => {
//     console.log(snapshot.val());
// }).catch((e) => {
//     console.log('error fetching data',e);
// });



// database.ref().set({
//     name: 'Chris Creighton',
//     age: 34,
//     isSingle: false,
//     location: {
//         city: 'Cincinnati',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log("Data is saved");  
// }).catch((e) => {
//     console.log("this failed",e);
// });

