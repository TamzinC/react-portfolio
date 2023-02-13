import {NavLink} from 'react-router-dom';
import profilePic from '../images/profile-pic.PNG';

function Header(props) {
    const styles = {
        img: {
            display: 'block',
            marginLeft: '10px',
            borderRadius: '50%',
            height: '40px',
            width: '40px'
        }
    }
    return (
        <header>
            <img src={profilePic} alt="profile" style={styles.img} />
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