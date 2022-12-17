import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Userpage from './pages/Userpage';
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/userpage' element={<Userpage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App