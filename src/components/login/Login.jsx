import React from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
   const auth = getAuth(app);
   const provider = new GoogleAuthProvider();
 
    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
        .then(restul => {
          const user =restul.user;
          console.log(user)
        })
        .catch(error => {
          console.log('error', error.message)
        })
    }

    return (
        <div>
            <h3 onClick={handleGoogleAuth}>Google sign</h3>
        </div>
    );
};

export default Login;