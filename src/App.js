import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MainView from './views/mainView/MainView';
import About from './views/aboutView/About';
import SearchView from './views/searchView/SearchView';


function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
        <Route path="/" exact><MainView /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/search"><SearchView /></Route>
      </Switch>

    </BrowserRouter>
  );
}



export default App;




