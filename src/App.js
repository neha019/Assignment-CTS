import logo from './logo.svg';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './Home';
import history from './utils/history';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
