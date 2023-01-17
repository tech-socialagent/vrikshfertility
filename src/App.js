import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact';
import Benefits from './components/Benefits';
import Choose from './components/Choose';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Benefits/>
      <Choose/>
      <Contact/>

    </div>
  );
}

export default App;
