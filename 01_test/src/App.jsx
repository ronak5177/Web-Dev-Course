import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> <Home/></>
    },
    {
      path: "/contact",
      element: <><Navbar /> <Contact/></>
    },
    {
      path: "/about",
      element: <><Navbar /> <About/></>
    },
  ])
  return (
    <>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
    This is app component
    </>
  )
}

export default App
