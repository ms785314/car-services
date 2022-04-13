// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsdEf9IxY1LXBKokUWSbozUFypG-6EMPc",
  authDomain: "car-service-a2b3f.firebaseapp.com",
  projectId: "car-service-a2b3f",
  storageBucket: "car-service-a2b3f.appspot.com",
  messagingSenderId: "24078515628",
  appId: "1:24078515628:web:b3c6c3b20393ab82194e09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;