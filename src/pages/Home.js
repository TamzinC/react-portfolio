import profilePic from '../images/profile-pic.PNG';

function Home(props) {
  
    return (
        <div>
            <div>
                <h1>Hey, I'm Tamzin!</h1>
                <p>Front-End Web Developer</p>
                <hr/>
                <button href="mailto:tamzin.chikhalia@gmail.com" role="button">Contact Me</button>
            </div>
            <div>
                <img src={profilePic} alt="profile"/>
            </div>
        </div>
    );
  }
  
  export default Home;