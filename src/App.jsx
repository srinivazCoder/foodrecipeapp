
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import NavBar from "./components/nav-bar/NavBar.jsx"
import Home from "./pages/home/Home.jsx"
import Favorites from "./pages/favorites/Favorites.jsx"
import Details from  "./pages/details/Details.jsx"


function App() {
 

  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/recipe-item/:id' element={<Details/>}/>
          </Routes>
      </div>
      
    </div>
  )
}

export default App
