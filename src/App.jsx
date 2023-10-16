
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {


  const loadAllCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadAllCoffees)

  return (
    <>
      <header className='space-y-3'>
        <nav className='space-x-3'>
          <Link className='btn btn-primary' to={'/login'}>Login</Link>
          <Link className='btn btn-primary' to={'/addcoffee'}>Add coffee</Link>
          <Link className='btn btn-primary' to={'/register'}>Register</Link>
          <Link className='btn btn-primary' to={'/users'}>Users</Link>
        </nav>
        <p>---Sip & Savor---</p>
        <h2>Our Popular Products</h2>
      </header>

      <div className='grid grid-cols-2 gap-10'>

        {
          coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
     
      </div>

    </>
  )
}

export default App
