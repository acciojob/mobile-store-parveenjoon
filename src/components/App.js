
import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import ProductDetail from './ProductDetail';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
