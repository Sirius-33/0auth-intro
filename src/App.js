import { Router } from '@reach/router';
import Login from './pages/Login';
import './App.css';
import Callback from './pages/Callback';

function App() {
  return (
    <Router>
      <Login default />
      <Callback path="/callback" />
    </Router>
  );
}

export default App;
