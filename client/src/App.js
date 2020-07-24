import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainView from './components/mainView';
import People from './components/routes/PeopleRoute';
import Images from './components/routes/ImagesRoute';
import Cities from './components/routes/CitiesRoute';
import Articles from './components/routes/ArticlesRoute';
import Comments from './components/routes/CommentsRoute';
import Movies from './components/routes/MoviesRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainView}></Route>
        <Route exact path="/cities" component={Cities}></Route>
        <Route exact path="/people" component={People}></Route>
        <Route exact path="/stocks" component={Images}></Route>
        <Route exact path="/articles" component={Articles}></Route>
        <Route exact path="/comments" component={Comments}></Route>
        <Route exact path="/movies" component={Movies}></Route>
      </Switch>
    </Router>
  );
}

export default App;
