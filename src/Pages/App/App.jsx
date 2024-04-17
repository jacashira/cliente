import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import { FrontendProvider, initializeLocalStorage } from '../../Context'
import ProveedoresPage from '../ProveedoresPage';
import Layout from '../../Component/Layout';
import Login from '../Login/login';
import './App.css'

function App() {



  return (
    <FrontendProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout><HomePage/></Layout>}/>
          <Route path='/proveedores' element={<Layout><ProveedoresPage/></Layout>}/>
          <Route path='/login' element={<Login/>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </FrontendProvider>
  )
}

export default App
