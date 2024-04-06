import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Shop from './Components/Shop';
import Home from './Components/Home';
import ItemDetail from './Components/ItemDetail';
import {BrowserRouter as Router, Switch, Routes, Route} from  'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route  path="/about/"  element={<About/>}/>
          <Route path="/shop/" element={<Shop/>}/>
          <Route path="/shop/:id" element= {<ItemDetail/>}/>
          </Routes>
         
      </div>
    </Router>
  );
}

export default App;
