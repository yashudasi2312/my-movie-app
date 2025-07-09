import {Link} from 'react-router-dom'
import "../CSS/Navbar.css"

function NavBar(){
    return(
        <nav className='navbar'>
                <div className='navbar-brand'>
                    <Link to = "/">Movie App
                    </Link>
                </div>

            <div className='navbarlinks'>
                <Link to = "/" className = "navlink">Home</Link>
                <Link to = "/favorites" className = "navlink">Favorites</Link>
            </div>
        </nav>
    )
}


export default NavBar