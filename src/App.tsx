import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/homepage/homepage.component';
import './App.scss';
import Navigation from './components/navigation.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <header className="App-header">        
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path="/art-webshop/" component={HomePage} />                          
            </Switch>
            </BrowserRouter>
          </Container>
      </header>
    </div>
  );
}

export default App;
