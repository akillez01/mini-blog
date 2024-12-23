import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <h1>Bem-vindo ao MiniBlog</h1>
        <Switch>
          {/* Defina suas rotas aqui */}
          <Route path="/" exact>
            <h2>Página Inicial</h2>
          </Route>
          {/* Adicione outras rotas conforme necessário */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;