import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h3>Hello, Learn about ContextAPI</h3>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
