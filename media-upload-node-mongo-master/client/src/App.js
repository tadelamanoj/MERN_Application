import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginFormik from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home'



function App() {

  const isLogin=localStorage.getItem('email')
  
  return (
    <BrowserRouter>
      <Routes>
        {isLogin?(<>
        <Route exact path="/" element={<Home/>}/>
        <Route path="*" element={<div className='align-content-center'>Page not Found</div>}/>
        </>):(
        <><Route exact path="/register" element={ <Register/>} />
          <Route exact path='/login' element={<LoginFormik/>} />
          <Route path="*" element={<LoginFormik/>}/></>)
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App