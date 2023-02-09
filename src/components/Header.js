import {NavLink} from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <h3>{props.title}</h3>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/gallery'>About Me</NavLink>
                <NavLink to='/project'>Projects</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </header>
    )
  }
  
  export default Header;