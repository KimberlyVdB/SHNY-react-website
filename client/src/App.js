import { Router } from "@reach/router"
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Info from './pages/info';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Home path="/" />
        <Info path="/info" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
