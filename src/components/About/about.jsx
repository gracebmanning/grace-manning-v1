import "./about.css";

const About = () => {
    return(
        <div class="aboutBackground" id="about">
            <div class="aboutContainer">
                <h2>A little bit about me:</h2>
                <div class="student">
                    <p>I am a 3rd-year Computer Science student at UC Irvine, with a minor in Film &amp; Media Studies.</p>
                </div>

                <div class="aboutTiles">
                    <div class="past">
                        <h2 class="tileTitle">I've been a...</h2>
                        <p>math tutor,</p>
                        <p>coding instructor,</p>
                        <p>customer service representative,</p>
                        <p>&amp; a personal stylist's assistant.</p>
                    </div>
                    <div class="current">
                        <h2 class="tileTitle">Currently, I'm a...</h2>
                        <p>UCI tour guide,</p>
                        <p>office assistant,</p>
                        <p>personal assistant,</p>
                        <p>&amp; Marketing Chair at WICS UCI.</p>
                    </div>
                </div>
                <h3>Looking for a more detailed breakdown?</h3>
                <div class="linksContainer">
                    <div class="bwLinkContainer">
                        <a class="bwLink" href="https://www.linkedin.com/in/grace-manning/" target="_blank" rel="noreferrer">
                            visit LinkedIn profile
                        </a>
                    </div>
                    <div class="bwLinkContainer">
                        <a class="bwLink" href="https://drive.google.com/file/d/1qtih-bJcLpVHc_zdPKEJiMFrBLuoXNzF/view?usp=sharing" target="_blank" rel="noreferrer">
                            view my resume
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About