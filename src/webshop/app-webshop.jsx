import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import WebshopNavigation from './webshop-navigation';
import Webshop from './pages/webshop.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import SignIn from '../webshop/pages/sign-in.component';
import Register from '../webshop/pages/register.component';


class AppWebshop extends React.Component {
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
        <WebshopNavigation></WebshopNavigation>
        <SignIn></SignIn>
        <BrowserRouter>
        <Switch>
        {/* <Route exact path="/art-webshop/webshop" component={Webshop} />                       */}
        <Route exact path="/art-webshop/register" component={Register} />                      
        <Route
            exact
            path='/art-webshop/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
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
)(AppWebshop);

