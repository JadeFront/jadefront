import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menubar from './Components/Menubar';
import Project from './Components/Project';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Home/>
      <About/> 
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
