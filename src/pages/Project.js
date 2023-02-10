

function Project(props) {
  const styles = {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '40px',
      marginBottom: '50px'
  }
  
    return (
      <main>
        <h1>Projects</h1>
          {props.challenges.map((challenge, index) => (
            <div style={styles}>
              <h3 key={index}>{challenge.title}</h3>
              <img key={index} src={challenge.image}></img>
              <a key={index} href={challenge.deployedURL}>Visit App</a>
              <a key={index} href={challenge.repo}>View GitHub Repo</a>
            </div>
          ))}
      </main>
    )
  }
  
  export default Project;