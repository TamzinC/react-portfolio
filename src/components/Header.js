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
                <NavLink to='/gallery'>About Me</NavLink>
                <NavLink to='/project'>Projects</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </header>
    )
  }
  
  export default Header;