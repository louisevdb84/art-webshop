import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Webshop from './webshop/pages/webshop.component'

import { auth, createUserProfileDocument } from './webshop/firebase/firebase.utils';
import { setCurrentUser } from './webshop/redux/user/user.actions';
import { selectCurrentUser } from './webshop/redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import SignIn from './webshop/pages/sign-in.component';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './webpage/components/homepage/homepage.component';
import Register from './webshop/pages/register.component';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
               

        <BrowserRouter>
        <Switch>
        <Route exact path="/art-webshop/" component={HomePage} />    
        <Route exact path="/art-webshop/webshop" component={Webshop} />                                                   
        <Route exact path="/art-webshop/register" component={Register} />                      
        <Route
            exact
            path='/art-webshop/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/art-webshop/webshop' />
              ) : (
                <SignIn></SignIn>
              )
            }
          />          
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
