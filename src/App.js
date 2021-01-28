import { useState } from "react";
import { Router } from '@reach/router';
import Login from './pages/Login';
import Callback from './pages/Callback';
import TokenContext from './TokenContext';
import './App.css';
import Featured from "./pages/Featured";


function App() {
  var tokenState = useState(null);

  return (
    <TokenContext.Provider value={tokenState}>
    <Router>
      <Login default />
      <Callback path="/callback" />
      <Featured path="/featured" />
    </Router>
    </TokenContext.Provider>
  );
}

export default App;
