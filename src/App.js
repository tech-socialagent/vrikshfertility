import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact';
import Benefits from './components/Benefits'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Benefits/>
      <Contact/>

    </div>
  );
}

export default App;
