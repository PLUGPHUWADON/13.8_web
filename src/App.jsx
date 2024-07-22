import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';
import All from './pages/All';

function App() {
  axios.defaults.withCredentials = true;

  return(
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="/search/:name" element={<Search/>} />
          <Route path="/all/:page" element={<All/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </Router>
  );
}

export default App
