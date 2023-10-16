import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdataeCoffee from './components/UpdataeCoffee.jsx'
import Login from './components/form/Login.jsx'
import Register from './components/form/Register.jsx'
import AuthProvider from './AuthProvider.jsx'
import Users from './components/form/Users.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch('https://coffe-store-server-rb83qbn0t-dipudebnath966-gmailcom.vercel.app/coffee')

  },
  {
    path: 'addcoffee',
    element: <AddCoffee></AddCoffee>

  },
  {
    path: '/login',
    element: <Login></Login>

  },
  {
    path: '/register',
    element: <Register></Register>

  },
  {
    path: '/updatecoffee/:id',
    element: <UpdataeCoffee></UpdataeCoffee>,
    loader: ({ params }) => fetch(`https://coffe-store-server-rb83qbn0t-dipudebnath966-gmailcom.vercel.app/coffee/${params.id}`)
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch(`https://coffe-store-server-rb83qbn0t-dipudebnath966-gmailcom.vercel.app/users`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
