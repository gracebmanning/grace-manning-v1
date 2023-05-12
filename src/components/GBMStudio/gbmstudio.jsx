import "./gbmstudio.css";
import React from 'react';
import GBMStudioLogo from "../../images/gbm-studio-logo_no-bg.png";
import {Link} from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import mainblue from "../../images/main-blue.png";
import mainpink from "../../images/main-pink.png";
import settingsblue from "../../images/settings-blue.png";
import historyblue from "../../images/history-blue.png";


const Main = () => {
    return(
        <div class="gbmstudio-container">
            <div class="gbmstudio-nav">
                <Link to="/" class="back-link">
                    <BsArrowLeftCircle class="left-circle"/>
                </Link>
                grace-manning.com
            </div>
            <div class="gbmstudio-welcome">
                <p class="gbmstudio-welcometext">welcome to</p>
                <img src={GBMStudioLogo} class="gbmstudio-logo" alt="logo in dark blue, with text reading GBM Studio placed over an outlined globe."></img>
            </div>
            <div class="cowculator-container">
                <div class="cowculator-title-container">
                    <h3>Introducing the...</h3>
                    <h1 class="cowculator-title">Cowculator</h1>
                </div>
                <p class="temp-text">A cow-themed calculator, available on iOS and Android!</p>
                <p class="temp-text"><b>Projected release date: June 2023</b></p>
                <br/>
                <p class="temp-text">Main page preview:</p>
                <div class="cowculator-screenshots-container">
                    <img class="cowculator-screenshot" src={mainblue} alt="screenshot shows a calculator with buttons that imitate cow spots. primary app color theme is a light blue."/>
                    <img class="cowculator-screenshot" src={mainpink} alt="screenshot shows a calculator with buttons that imitate cow spots. primary app color theme is a light pink."/>
                </div>
                <br/>
                <p class="temp-text">Settings and History pages preview:</p>
                <div class="cowculator-screenshots-container">
                    <img class="cowculator-screenshot" src={settingsblue} alt="a settings page showing color theme options, sound effects toggle, and option to view results history."/>
                    <img class="cowculator-screenshot" src={historyblue} alt="a history page that shows each result returned by the calculator in order of its corresponding time and date."/>
                </div>
                <br/>
                <p class="temp-text">Stay tuned for updates!</p>
            </div>
        </div>
    );
};

export default Main