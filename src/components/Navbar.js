import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () =>{
    let location = useLocation().pathname;
    if (location==="/"){
        return(
            <div className="navbar-home">
                    <nav className="navMenu">
                        <Link to='/'>Home</Link>
                        <Link to='/todo'>To-do list</Link>
                        <Link to='/calendar'>Calendar</Link>
                        <Link to='/about'>About us</Link>
                    </nav>
                </div>
        )
    } else
    return(
        <div className="navbar-todo">
                <nav className="navMenu">
                    <Link to='/'>Home</Link>
                    <Link to='/todo'>To-do list</Link>
                    <Link to='/calendar'>Calendar</Link>
                    <Link to='/about'>About us</Link>
                </nav>
            </div>
    )
}

export default Navbar;