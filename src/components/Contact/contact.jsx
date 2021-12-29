import "./contact.css";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return(
        <div class="contactBackground" id="contact">
            <div class="contactContainerBackground">
                <div class="contactContainer">
                    <h2 class="contactMe">Contact Me!</h2>
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
                    <p class="emailMe">reach me by email at<br/><b>gracebmanning@gmail.com</b></p>
                    <div class="emailIcon"><MdEmail/></div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Contact