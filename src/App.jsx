import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home <h1>Hello world</h1>{' '}
      </Route>

      <Route exact path="/started">
        This is started <h1>Hello world</h1>{' '}
      </Route>

      <Route>
        {' '}
        <h1>This is 404 page</h1>
      </Route>
    </Switch>
  );
}
export default App;
