// import logo from './logo.svg';
// import './App.css';

import ProductHeader from './components/ProductHeader';
import ProductFooter from './components/ProductFooter';
import ProductMain from './components/ProductMain';

function App() {
  return (
    <div className="App">
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

      <ProductHeader />
      <ProductMain />
      <ProductFooter />
    </div>
  );
}

export default App;
