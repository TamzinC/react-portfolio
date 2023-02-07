

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
        <nav style={styles.navBar}>
            <ul>
                <a href='#'>Home</a>
                <a href='#'>About Me</a>
                <a href='#'>Projects</a>
                <a href='#'>Contact</a>
            </ul>
            <h3 href='#'>{props.title}</h3>
        </nav>
    )
  }
  
  export default Header;