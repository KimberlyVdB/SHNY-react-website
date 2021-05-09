import { Router } from "@reach/router"
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Winners from './pages/winners';
import Contact from './pages/contact';
import Apply from './pages/apply';
import Winter from './pages/winners/winter';
import Halloween from './pages/winners/halloween';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Winners path="/winners" />
        <Winter path="/winter" />
        <Halloween path="/halloween" />
        <Contact path="/contact" />
        <Apply path="/apply" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
