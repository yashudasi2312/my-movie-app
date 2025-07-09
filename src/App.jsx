import Favorites from './pages/Fav';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar';
import './CSS/App.css'
import { MovieProvider } from './Contexts/MovieContext'; 

function App() {


  return (
    <MovieProvider>
      <NavBar/>
      <main className='maincontent'>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/favorites' element = {<Favorites/>}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;