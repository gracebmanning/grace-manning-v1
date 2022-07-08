import "./gbmstudio.css";
import {Link} from 'react-router-dom';
import GBMStudioLogo from '../../images/gbm-studio-logo-no_bg.png';

const GBMStudio = () => {
    return(
        <div class="gbmstudio-outer-container" id="gbm-studio">
                <div class="gbmstudio-container">
                    
                    <div class="gbmstudio-page-top">
                        <div class="gbmstudio-back-button">
                            <Link to="/" class="back-link">
                                <p>back to Home</p>
                            </Link>
                        </div>
                        <img src={GBMStudioLogo} class="gbmstudio-logo" alt="logo in dark blue, with text reading GBM Studio placed over an outlined globe."></img>
                        <div class="gbmstudio-title-container">
                            <h1 class="gbmstudio-title">coming soon...</h1>
                        </div>
                    </div>
                    <footer class="gbmstudio-footer">
                        <p>for inquiries</p>
                        <p>email gracebmanning@gmail.com</p>
                    </footer>
                </div>
            </div>
    );
};

export default GBMStudio