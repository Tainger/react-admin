import React from 'react'

import {Routes, BrowserRouter, Route, Link} from 'react-router-dom'
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import MyButton from "@/pages/MyButton";
import JSMyButton from "@/pages/JSMyButton";

import 'antd/dist/antd.min.css'
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Link to="/">首页</Link>
                <Link to="/login">登陆</Link>
                <Link to="/buttonFocus">按钮</Link>
                <Link to="/JSMyButton">js按钮</Link>
                <Routes>
                    <Route path='/' element={<Layout/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/buttonFocus' element={<MyButton/>}></Route>
                    <Route path='/JSMyButton' element={<JSMyButton/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
