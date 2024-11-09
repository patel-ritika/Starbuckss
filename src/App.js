import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Feature from './components/Feature';
import Previous from './components/Previous';
import Favorite from './components/Favorite';
import Rewards from './components/Rewards';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Header/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/featured" element={<Feature />} />
  <Route path="/previous" element={<Previous />} />
  <Route path="/favorites" element={<Favorite />} />
  <Route path="/rewards" element={<Rewards />} />
</Routes>

<Footer/>
</BrowserRouter>
    
  
  











     {/*} <header className="App-header">
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
      </header>*/}
    </div>
  );
}

export default App;
