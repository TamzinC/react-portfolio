import styles from './Projects.module.css';

function Projects(props) {

  return (
    <>
      <h1 className={styles.marginText}>Projects</h1>
      {/* Mapping over array of objects to list each of the indexes */}
      {props.challenges.map((challenge, index) => (
        <div className={styles.projectCard} key={index}>
          <h2 className={styles.marginText}>{challenge.title}</h2>
          <img className={styles.marginText} src={challenge.image}></img>
          <p className={styles.marginText}>{challenge.description}</p>

          <div className={styles.btn}>
            {/* Using conditional statement to show a deployed url depending on whether there is data available - if no data then url button will not be shown */}
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

export default Projects;
