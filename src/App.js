import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail/Detail';
import Header from './components/header/header'
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
