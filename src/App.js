import React from 'react'

import {Routes, BrowserRouter, Route, Link} from 'react-router-dom'
import Layout from "./pages/Layout";
import Login from "./pages/Login";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Link to="/">首页</Link>
                <Link to="/login">登陆</Link>
                <Routes>
                    <Route path='/' element={<Layout/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
