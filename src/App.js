// import logo from './logo.svg';
import './App.css';


// Bootstrap CDN
import 'bootstrap/dist/css/bootstrap.min.css';
// Site Components
import MainContainer from './components/mainContainer/MainContainer';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <MainContainer />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
