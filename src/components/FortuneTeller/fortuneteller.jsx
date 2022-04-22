import "./fortuneteller.css";
import React from 'react';
import {Link} from 'react-router-dom';
import { fortunesList } from "./fortunes";
import orangetape from "../../images/tape2.png";
import handbackbutton from "../../images/hand-pointing-left.png"


class FortuneTeller extends React.Component {
    constructor(props){
        super(props);
        this.state = {fortune: ""};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(fortune => (
            fortunesList[Math.floor(Math.random()*fortunesList.length)]
        ));
    }

    render(){
        return(
            <div class="fortunes-outer-container">
                <div class="fortunes-container">
                    
                    <div class="fortunes-page-top">
                        <div class="fortunes-back-button">
                            <Link to="/">
                                <img src={handbackbutton} alt="hand pointing left" class="hand-back-button"/>
                                <p class="back-text">back to Home</p>
                            </Link>
                        </div>
                        <div class="fortunes-title-container">
                            <img src={orangetape} alt="strip of orange tape" class="orange-tape"/>
                            <h1 class="fortunes-title">Fortune Teller</h1>
                        </div>
                    </div>

                    <div class="fortunes-body">
                        <button onClick={this.handleClick} class="get-fortune-button">
                            Get fortune!
                        </button>
                        <div class="fortunes-wrapper">
                            <p class="your-fortune-is">Your fortune is...</p>
                            <p class="fortune-text">{fortunesList[Math.floor(Math.random()*fortunesList.length)]}</p>
                        </div>
                    </div>  

                </div>
            </div>
        );
    }
}

export default FortuneTeller