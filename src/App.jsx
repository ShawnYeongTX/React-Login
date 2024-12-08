import { useState } from 'react'
import './App.css'
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { AuthContext } from './AuthContext.js'
import RequireAuth from './components/RequireAuth.jsx'
import Dashboard from './pages/Dashboard.jsx'
import useLocalStorage from 'use-local-storage'
// <--- Import --->


function App() {
  const [token, setToken] = useLocalStorage("token", null)
  return (
    <AuthContext.Provider value={{token, setToken}}>
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<Login/>} path="/login" />
      <Route element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      }
      path ="/dashboard"/>
    </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
