import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './components/IndexPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Layout from './components/Layout'
import axios from 'axios';
import DashboardPage from './components/DashboardPage'
import { UserContextProvider } from './UserContext'

axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  
  return (
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </Route>
        </Routes>

      </UserContextProvider>
  )
}

export default App
