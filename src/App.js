import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
