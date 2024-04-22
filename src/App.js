import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Nabar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <Main />
      </header>
    </div>
  );
}

export default App;
