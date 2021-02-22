import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from 'firebase/app';

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

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
