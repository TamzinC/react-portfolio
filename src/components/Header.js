import {NavLink} from 'react-router-dom';

function Header(props) {
    const styles = {
        img: {
            display: 'block',
            marginLeft: '10px',
            borderRadius: '50%',
            height: '40px',
            width: '40px'
        },
        logo: {
            display: "flex",
            alignItems: "center"
        }
    }
    return (
        <header>
            <div className="logo" style={styles.logo}>
                <img src='./images/profile-pic.PNG' alt="profile" style={styles.img} />
                <h3 style={{marginLeft: "10px"}}>{props.title}</h3>
            </div>

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