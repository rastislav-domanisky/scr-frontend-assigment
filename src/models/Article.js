import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0hnXJ50SdWltwH0Swo1q8wSSN_motnoM",
  authDomain: "scr-frontend-assigment.firebaseapp.com",
  projectId: "scr-frontend-assigment",
  storageBucket: "scr-frontend-assigment.appspot.com",
  messagingSenderId: "369853383012",
  appId: "1:369853383012:web:c18ef4c1cf25f076adfa71",
  measurementId: "G-33T523FNP6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

class Article {
    loadArticleIds = async () => {
        const doc = await db.collection("MAIN").doc("articles").get();
        return doc.data()["all"];
    }

    loadArticleData = async (id) => {
        const doc = await db.collection("ARTICLES").doc(id).get();
        return doc.data();
    }
}

export default Article;