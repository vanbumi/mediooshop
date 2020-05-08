import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomepageComponent';
import ShopPage from './pages/shop/ShopComponent';
import SignInAndSignUpPage from './pages/signIn-signUp/SignIn-SignUpComponent';
import Header from './components/header/HeaderComponent';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
