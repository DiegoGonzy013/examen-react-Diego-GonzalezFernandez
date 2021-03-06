import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { PaginasApp } from './data/PaginasApp';

export function App() {
  return (
    <Router>
        <Menu />
        No se muestra el estilo gg
        {PaginasApp.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component}
            />
          );
        })}
    </Router>
  );
}
export default App;
