import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/">
        This is home <h1>Hello world</h1>{' '}
      </Route>
    </Switch>
  );
}
export default App;
