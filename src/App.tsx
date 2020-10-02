import routes from './routes';

import React, { Suspense } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { customHistory } from 'store';

function App() {
  return (
    <Router history={customHistory as any}>
      <Suspense fallback={<div />}>
        <Switch>
          {Object.values(routes).map((route) => (
            <Route key={route.label} path={route.path} exact component={route.component} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
