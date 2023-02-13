import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Project(props) {
  const styles = {
    projects: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "40px",
      marginBottom: "50px",
      backgroundColor: '#EBD7C1',
      color: "#462920",
      borderRadius: '6px',
      padding: '30px',
      marginRight: '50px',
      marginBottom: '20px'
    },
    button: {
      backgroundColor: 'rgb(128, 108, 84)',
      color: '#fff',
      margin: '3px',
      borderRadius: '5px'
    }
  };

  return (
    <>
      <h1 style={{marginBottom: '30px'}}>Projects</h1>
      {props.challenges.map((challenge, index) => (
        <div style={styles.projects}>
          <h3 key={index}>{challenge.title}</h3>
          <img key={index} src={challenge.image}></img>
          <p key={index}>{challenge.description}</p>
          <button style={styles.button} key={index} href={challenge.deployedURL}>
            Visit App
          </button>
          <button style={styles.button} key={index} href={challenge.repo}>
            View GitHub Repo
          </button>
        </div>
      ))}

      
    </>
  );
}

export default Project;


// {props.challenges.map((challenge, index) => (
//   <Card style={{ width: "18rem" }}>
//     <Card.Img variant="top" src={challenge.image} />
//     <Card.Body>
//       <Card.Title key={index}>{challenge.title}</Card.Title>
//       <Card.Text key={index}>
//         {challenge.description}
//       </Card.Text>
//       <Button variant="primary" key={index} href={challenge.deployedURL}>
//         Visit App
//       </Button>
//       <Button variant="primary" key={index} href={challenge.repo}>
//         View GitHub Repo
//       </Button>
//     </Card.Body>
//   </Card>
// ))}