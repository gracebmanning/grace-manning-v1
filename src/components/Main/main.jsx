import "./main.css";
import { FaLinkedin, FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
import Cow from "../../images/cow.png";

const Main = () => {
    return(
        <div class="mainBackground" id="main">
            <div class="mainContainer">
                <div class="textAndIcons">
                    <div class="hiImGrace">
                        <h1>Hi, I'm</h1>
                        <h1>Grace!</h1>
                    </div>
                    <div class="socialIcons">
                        <a href="https://www.linkedin.com/in/grace-manning/" target="_blank" rel="noreferrer">
                            <FaLinkedin class="icon"/>
                        </a>
                        <a href="https://github.com/gracebmanning/" target="_blank" rel="noreferrer">
                            <FaGithub class="icon"/>
                        </a>
                        <a href="https://www.instagram.com/gracebmanning/" target="_blank" rel="noreferrer">
                            <FaInstagram class="icon"/>
                        </a>
                        <a href="https://medium.com/@gracebmanning" target="_blank" rel="noreferrer">
                            <FaMedium class="icon"/>
                        </a>
                    </div>
                </div>
                <img src={Cow} alt="brown cow" class="cowImage"/>
            </div>
            
        </div>
    );
};

export default Main