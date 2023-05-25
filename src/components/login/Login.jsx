import React from 'react';
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider(app)
 
    const handleGoogleAuth = () => {
        console.log('i am google account')
    }

    return (
        <div>
            <h3 onClick={handleGoogleAuth}>Google sign</h3>
        </div>
    );
};

export default Login;