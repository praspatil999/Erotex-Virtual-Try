import './App.css'
import Home from './pages/Home'
import { BrowserRouter } from "react-router-dom"
import Footer from './components/common/Footer'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/common/Navbar'


function App() {

  return (
    <BrowserRouter>
      
      <Navbar></Navbar>
      <AppRoutes />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App
