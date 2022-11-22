import "./projects.css";
import { FaMedium } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import handbackbutton from "../../images/hand-pointing-left.png";
import GBMstudio from "../../images/gbm-studio-logo_no-bg.png";

const Projects = () => {
    return(
        <div class="projectsBackground" id="projects">
            <div class="projectsContainer">
                <h2 class="projectsTitle">Projects</h2>
                <div class="projectTile">
                    <a href="https://gbm-studio.com" class="link-text" target="blank">
                        <img class="gbmstudioLogo" src={GBMstudio} alt="A dark blue globe with text GBM Studio layered on top." />
                        <p>check out my current software projects at <b>gbm-studio.com</b>!</p>
                    </a>
                </div>
                <div class="projectTile">
                    <Link to="/fortune-teller" class="link-text">
                        <p>want to test your luck today? <b>try out my fortune teller</b>!</p>
                        <img class="hand-image" src={handbackbutton} alt="hand pointing left" />
                    </Link>
                </div>
                <div class="projectTile">
                    <a class="link-text" href="https://medium.com/@gracebmanning" target="_blank" rel="noreferrer">
                        <FaMedium class="medium-icon"/>
                        <p>sometimes I write! view my blog on <b>Medium</b>.</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects

/*
Society6
<div class="projectTile">
    <a class="projectLink" href="https://society6.com/gracemanning" target="_blank" rel="noreferrer">
        <p>I also dabble in photography...</p>
        <h4>view my print shop on Society6</h4>
        <SiSociety6 class="projIcon"/>
    </a>
</div>

Behance
<div class="projectTile">
    <a class="projectLink" href="https://www.behance.net/gracebmanning/" target="_blank" rel="noreferrer">
        <p>I design websites, apps, and more!</p>
        <h4>view my design portfolio on Behance</h4>
        <FaBehanceSquare class="projIcon"/>
    </a>
</div>
*/