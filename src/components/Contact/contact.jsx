import "./contact.css";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return(
        <div class="contactBackground" id="contact">
            <div class="contactContainer">
                <h2 class="contactMe">Contact Me!</h2>
                <p class="emailMe">Email me at gracebmanning@gmail.com</p>
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
                </div>
            </div>

            
            
        </div>
    );
};

export default Contact