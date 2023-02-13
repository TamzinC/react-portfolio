function Project(props) {
  const styles = {
    projects: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "50px",
      marginRight: "50px",
      marginBottom: "20px",
      backgroundColor: "#EBD7C1",
      color: "#462920",
      borderRadius: "6px",
      padding: "40px",
    },
    btn: {
      textAlign: "center"
    },
    marginText: {
      marginBottom: "20px"
    }
  };

  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Projects</h1>
      {props.challenges.map((challenge, index) => (
        <div style={styles.projects}>
          <h2 style={styles.marginText}>{challenge.title}</h2>
          <img style={styles.marginText} src={challenge.image}></img>
          <p style={styles.marginText}>{challenge.description}</p>

          <div className="btn" style={styles.btn}>
            {challenge.deployedURL && (
              <button>
                <a href={challenge.deployedURL} target="_blank">
                  Visit App
                </a>
              </button>
            )}
            <button>
              <a href={challenge.repo} target="_blank">
                View Repo
              </a>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
