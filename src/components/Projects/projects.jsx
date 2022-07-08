import "./projects.css";
import { FaBehanceSquare, FaMedium } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { SiSociety6 } from 'react-icons/si';
import {Link} from 'react-router-dom';
import handbackbutton from "../../images/hand-pointing-left.png";

const Projects = () => {
    return(
        <div class="projectsBackground" id="projects">
            <div class="projectsContainer">
                <div class="projectTile" id="fortune-teller">
                    <Link to="/gbm-studio" class="link-text">
                        <p>check out my</p>
                        <h4>current software projects!</h4>
                        <BsArrowRightCircle class="right-arrow-icon"/>
                    </Link>
                </div>
            </div>

            <div class="projectsContainer">
                <div class="projectTile" id="fortune-teller">
                    <Link to="/fortune-teller" class="link-text">
                        <p>want to test your luck today?</p>
                        <h4>try out my new fortune teller!</h4>
                        <img src={handbackbutton} alt="hand pointing left" class="hand-image"/>
                    </Link>
                </div>
            </div>

            <div class="projectsContainer">

                <div class="projectTile">
                    <a class="projectLink" href="https://www.behance.net/gracebmanning/" target="_blank" rel="noreferrer">
                        <p>I design websites, apps, and more!</p>
                        <h4>view my design portfolio on Behance</h4>
                        <FaBehanceSquare class="projIcon"/>
                    </a>
                </div>

                <div class="projectTile">
                    <a class="projectLink" href="https://society6.com/gracemanning" target="_blank" rel="noreferrer">
                        <p>I also dabble in photography...</p>
                        <h4>view my print shop on Society6</h4>
                        <SiSociety6 class="projIcon"/>
                    </a>
                </div>

                <div class="projectTile">
                    <a class="projectLink" href="https://medium.com/@gracebmanning" target="_blank" rel="noreferrer">
                        <p>Sometimes I write!</p>
                        <h4>view my blog on Medium</h4>
                        <FaMedium class="projIcon"/>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Projects