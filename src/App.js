import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/calculator' exact element={<Calculator/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
