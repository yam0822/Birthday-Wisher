import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Generate from './components/Generate';
import Birthday from './components/Birthday';
import RouterBirthday from './components/RouterBirthday';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/components/generate' component={Generate} />
        <Route
          exact
          path='/birthday/:name?/:day?/:month?'
          component={RouterBirthday}
        />
        <Route exact path = '/' component={Birthday} />
      </Switch>
    </div>
  );
}

export default App;
