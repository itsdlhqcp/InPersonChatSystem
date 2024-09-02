
import { Container } from 'reactstrap';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';
import { ToastContainer } from 'react-toastify';
// import { Protector } from './helpers';

function App() {
  return (
    <Container>
      <BrowserRouter>
         <Routes>
             {/* <Route path='/' element={<Protector Component={Home}/>}/> */}
             <Route path='/' element={<Home/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/logout' element={<Logout/>}/>
             <Route path='/registration' element={<Registration/>}/>
         </Routes>
         <ToastContainer/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
