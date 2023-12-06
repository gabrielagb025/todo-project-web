import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './views/Home/home';
import Register from './views/Auth/Register/register';
import Login from './views/Auth/Login/login';

function App() {

  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  )
}

export default App
