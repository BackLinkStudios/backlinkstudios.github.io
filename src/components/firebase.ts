import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDJ5-dEduwpvm8QD6sI0wf-HcYaqEgFSEQ",
	authDomain: "blstudio.firebaseapp.com",
	projectId: "blstudio",
	storageBucket: "blstudio.appspot.com",
	messagingSenderId: "740702309988",
	appId: "1:740702309988:web:60952bb127ca0a14c2d971"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const firest = getFirestore(app);
