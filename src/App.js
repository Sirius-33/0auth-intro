import { Router } from '@reach/router';
import { Router } from "@reach/router";
import Login from './pages/Login';
import Callback from './pages/Callback';
import TokenContext from './TokenContext';
import './App.css';

function App() {
  return (
    <Router>
      <Login default />
      <Callback path="/callback" />
    </Router>
  );
}

export default App;
