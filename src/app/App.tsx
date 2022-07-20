/** 
 * This is the main entry point of your React application. 
 * The React application is a React component like any other react components. 
 */
import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home/Home';

export const App: React.FunctionComponent = () => {
  return <Router>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
}