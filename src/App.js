import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { stoage_locationsRoutes } from './routers/index';
import Frame from './components/Frame/Index';
import './App.css';

function App() {
  return (
    <Frame>

      <Switch>
        {stoage_locationsRoutes.map(r => {
          return <Route key={r.path} path={r.path} exact={r.exact} render={rP => {
            return <r.component {...rP} />;
          }} />
        })}
        <Redirect to='/notfound' />
      </Switch>

    </Frame>

  );
}

export default App;
