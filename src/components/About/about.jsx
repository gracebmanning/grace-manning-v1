import "./about.css";
import profilePhoto from "../../images/2022-0724 circular 500.png";
import WICS from "../../images/WICS-logo.png";
import VH from "../../images/VH-logo.png";

const About = () => {
    return(
        <div class="aboutBackground" id="about">
            <div class="aboutContainer">
                <h2 class="aboutTitle">About Me</h2>
                <div class="aboutPhotoBio">
                    <img class="profilePhoto" src={profilePhoto} alt="portrait of Grace laughing" />
                    <div class="bio">
                        <p>I am a 4th-year Computer Science student at UC Irvine!</p>
                        <p>pronouns: she/her</p>
                        <p>hometown: San Diego, CA</p>
                    </div>
                </div>
                <h3>Organizations &amp; Campus Involvements</h3>
                <div class="aboutTiles">
                    <div class="tile">
                        <a class="org-link" href="https://wics.ics.uci.edu" target="_blank" rel="noreferrer">
                            <img src={WICS} alt="WICS logo" class="org-logo" id="WICS-logo"/>
                            <div class="tileText">
                                <h3 class="tileTitle">Women in Information and Computer Sciences (WICS) at UCI</h3>
                                <p>2021-2022: Marketing Chair</p>
                                <p>2020-2021: Committee Member</p>
                                <p>2019-2020: General Member</p>
                            </div>
                        </a>
                    </div>
                    <div class="tile">
                        <a class="org-link" href="https://venushacks.com/" target="_blank" rel="noreferrer">
                            <img src={VH} alt="VH logo, a lavender planet" class="org-logo" id="VH-logo"/>
                            <div class="tileText">
                                <h3 class="tileTitle">VenusHacks Organizer</h3>
                                <p>UC Irvine's largest women-centric hackathon!</p>
                                <p>2021-2022: Marketing Committee + website team</p>
                                <p>2022-2023: Co-President</p>
                            </div>
                        </a>
                    </div>
                </div>
                <p><b>Looking for more info?</b></p>
                <div class="linksContainer">
                    <div class="bwLinkContainer">
                        <a class="bwLink" href="https://www.linkedin.com/in/grace-manning/" target="_blank" rel="noreferrer">
                            visit LinkedIn profile
                        </a>
                    </div>
                    <div class="bwLinkContainer">
                        <a class="bwLink" href="https://drive.google.com/file/d/1EtWTjtec1pUtiXHf5Z0BJx2TopWuFeMs/view?usp=sharing" target="_blank" rel="noreferrer">
                            view my resume
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About