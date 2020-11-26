import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import WebshopNavigation from './webshop-navigation';
import Webshop from './pages/webshop.component'


function App() {
  return (
    <div className="App">
       <WebshopNavigation></WebshopNavigation>
        <Container>

          <BrowserRouter>
            <Switch>              
              <Route exact path="/webshop" component={Webshop} />                               
            </Switch>
            </BrowserRouter>
          </Container>
     
    </div>
  );
}

export default App;
