import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Theme from "./components/Theme"
import Details from './pages/Details'
import './App.css'
import './index.css'

const App = () => {
  return (
    <>
      <header>
        <h1 className="title">Where in the world?</h1>
        <Theme />
      </header>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Details />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

