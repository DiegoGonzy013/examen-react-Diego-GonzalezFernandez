import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Menu/>
      No se muestra el estilo gg
    </Router>
  );
}
export default App;
