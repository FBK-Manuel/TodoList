import { Route, Routes } from 'react-router-dom';
import './assets/style.css';
import Register from './components/form/Register';
import Login from './components/form/Login';
import Profile from './components/Profile';
import PrivateRoutes from './components/appwrite/privateRoutes';
import Home from './components/mainLayout/home';




function App() {


  return (
    <div className='App'>

      <Routes>

        <Route path='/' element={<Home />} />

        {/* private route access by loggin */}
        <Route element={<PrivateRoutes />}>
          <Route path='/profile' element={<Profile />} />
        </Route>


        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

      </Routes>


    </div>
  )
}

export default App
