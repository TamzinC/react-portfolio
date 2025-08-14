import { useState } from "react";
import styles from "./Projects.module.css";

function Projects({ challenges }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const personalProjects = challenges.filter(
    (project) => project.type === "personal"
  );

  const professionalProjects = challenges.filter(
    (project) => project.type === "professional"
  );

  const renderProjects = (projectList, type) =>
    projectList.map((challenge, index) => (
      <div
        className={`${styles.projectCard} ${
          expandedIndex === index ? styles.expanded : ""
        }`}
        key={index}
      >
        <h2 className={styles.projectTitle}>{challenge.title}</h2>
        <img
          className={styles.projectImg}
          src={challenge.image}
          alt={challenge.title}
        ></img>
        <p className={styles.projectDescription}>
          {expandedIndex === index
            ? challenge.description
            : `${challenge.description.slice(0, 100)}...`}
          <a className={styles.moreBtn} onClick={() => toggleExpand(index)}>
            {expandedIndex === index ? "Less" : "More"}
          </a>
        </p>

        <div className={styles.btn}>
          {/* Using conditional statement to show the available buttons based on whether it is a personal or professional project */}
          {type === "personal" && (
            <>
              {/* Using conditional statement to show a deployed url depending on whether there is data available - if no data then url button will not be shown */}
              {challenge.deployedURL && (
                <button className={styles.btnText}>
                  <a
                    href={challenge.deployedURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit App
                  </a>
                </button>
              )}
              <button className={styles.btnText}>
                <a
                  href={challenge.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repo
                </a>
              </button>
            </>
          )}

          {type === "professional" && challenge.companyURL && (
             <button className={styles.btnText}>
            <a
              href={challenge.companyURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Company Website
            </a>
          </button>
          )}
        </div>
      </div>
    ));

  return (
    <>
      <h1 className={styles.marginText}>Projects</h1>

      {professionalProjects.length > 0 && (
        <>
          <h2 className={styles.marginText}>Professional Projects</h2>
          <div className={styles.projectContainer}>
            {renderProjects(professionalProjects, "professional")}
          </div>
        </>
      )}

      {personalProjects.length > 0 && (
        <>
          <h2 className={styles.marginText}>Personal Projects</h2>
          <div className={styles.projectContainer}>
            {renderProjects(personalProjects, "personal")}
          </div>
        </>
      )}
    </>
  );
}

export default Projects;

// <h1 className={styles.marginText}>Projects</h1>
{
  /* Mapping over array of objects to list each of the indexes */
}
// <div className={styles.projectContainer}>
//   {props.challenges.map((challenge, index) => (
//     <div
//       className={`${styles.projectCard} ${
//         expandedIndex === index ? styles.expanded : ""
//       }`}
//       key={index}
//     >
//       <h2 className={styles.projectTitle}>{challenge.title}</h2>
//       <img
//         className={styles.projectImg}
//         src={challenge.image}
//         alt={challenge.title}
//       ></img>
//       <p className={styles.projectDescription}>
//         {expandedIndex === index
//           ? challenge.description
//           : `${challenge.description.slice(0, 100)}...`}
//           <a className={styles.moreBtn} onClick={() => toggleExpand(index)}>
//             {expandedIndex === index ? "Less" : "More"}
//           </a>
//       </p>

//       <div className={styles.btn}>
//         {/* Using conditional statement to show a deployed url depending on whether there is data available - if no data then url button will not be shown */}
//         {challenge.deployedURL && (
//           <button className={styles.btnText}>
//             <a href={challenge.deployedURL} target="_blank" rel="noopener noreferrer">
//               Visit App
//             </a>
//           </button>
//         )}
//         <button className={styles.btnText}>
//           <a href={challenge.repo} target="_blank" rel="noopener noreferrer">
//             View Repo
//           </a>
//         </button>
//       </div>
//     </div>
//   ))}
// </div>
