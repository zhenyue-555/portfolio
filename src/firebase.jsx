import { initializeApp } from 'firebase/app';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "https://<your-database-name>.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
    measurementId: "your-measurement-id"
};


const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);