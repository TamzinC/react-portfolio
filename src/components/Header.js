import {NavLink} from 'react-router-dom';

function Header(props) {

    const styles = {
        navBar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '9px 3%'
        },
        links: {
            textDecoration: 'none'
        }
    }

    return (
        <header style={styles.navBar}>
            <h3>{props.title}</h3>
            <nav style={styles.links}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about-me'>About Me</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </header>
    )
  }
  
  export default Header;