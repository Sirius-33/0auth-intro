import { Router } from '@reach/router';
import Login from './pages/Login';
import Callback from './pages/Callback';
import TokenContext from './TokenContext';
import './App.css';

function App() {
  return (
    <TokenContext.Provider value={tokenState}>
    <Router>
      <Login default />
      <Callback path="/callback" />
    </Router>
    </TokenContext.Provider>
  );
}

export default App;
