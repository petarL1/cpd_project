import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
                <nav class="navMenu">
                    <Link to='/'>Home</Link>
                    <Link to='/todo'>To-do list</Link>
                    <Link to='/notes'>Notes</Link>
                    <Link to='/calendar'>Calendar</Link>
                    <Link to='/about'>About us</Link>
                </nav>
            </div>
    )
}

export default Navbar;