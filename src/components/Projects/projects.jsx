import "./projects.css";
import { FaBehanceSquare, FaMedium } from 'react-icons/fa';
import { SiSociety6 } from 'react-icons/si';

const Projects = () => {
    return(
        <div class="projectsBackground" id="projects">
            <div class="projectsContainer">

                <div class="projectTile">
                    <p>I design websites, apps, and more!</p>
                    <h4>view my design portfolio on Behance</h4>
                    <a href="https://www.behance.net/gracebmanning/" target="_blank" rel="noreferrer">
                        <FaBehanceSquare class="projIcon"/>
                    </a>
                </div>

                <div class="projectTile">
                    <p>I also dabble in photography...</p>
                    <h4>view my print shop on Society6</h4>
                    <a href="https://society6.com/gracemanning" target="_blank" rel="noreferrer">
                        <SiSociety6 class="projIcon"/>
                    </a>
                </div>

                <div class="projectTile">
                    <p>Sometimes I write!</p>
                    <h4>view my blog on Medium</h4>
                    <a href="https://medium.com/@gracebmanning" target="_blank" rel="noreferrer">
                        <FaMedium class="projIcon"/>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Projects