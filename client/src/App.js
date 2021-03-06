// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    
    <Router>
      <Route path="/" exact render={() => <Home /> } />
    </Router>

    // <div className="App">test
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
