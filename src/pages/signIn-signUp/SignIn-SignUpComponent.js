import React from 'react';

import SignIn from '../../components/sign-in/SignInComponent';
import SignUp from '../../components/sign-up/SignUpComponent';

import './signIn-signUpStyle.scss';

const SignInAndSignUpPage = () => (

    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;