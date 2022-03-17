import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App" >
      <header>
        <img src={process.env.PUBLIC_URL + 'images/logo.svg'} className="App-logo" alt="logo" />
      </header>
      <div className="hero">
        <img src={process.env.PUBLIC_URL + 'images/illustration-mockups.svg'} className="App-mockups" alt="logo" />
      </div>
      <div className="main">
        <h1>
          Build The Community Your Fans Will Love
        </h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </p>
        <button>
          Register
        </button>
      </div> 
      <div className="icons">
        <FontAwesomeIcon className="icon fb-icon fa-lg" icon={faFacebookF} />
        <FontAwesomeIcon className="icon twitter-icon fa-lg" icon={faTwitter} />
        <FontAwesomeIcon className="icon insta-icon fa-lg" icon={faInstagram} />
      </div>      
    </div>
  );
}

export default App;

