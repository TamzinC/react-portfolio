

function Project(props) {
  
    return (
      <main>
        <ul>
          {props.challenges.map((challenge, index) => (
            <li key={index}>{challenge.title}</li>
          ))}
        </ul>
      </main>
    )
  }
  
  export default Project;