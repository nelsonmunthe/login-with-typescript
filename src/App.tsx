import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from '../src/login/Index';
import Landingpage from '../src/landingpage/Index';
import BonSementara from '../src/bonSementara/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/landing-page" element={<Landingpage />}></Route>
        <Route path="/dashboard" element={<BonSementara />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
