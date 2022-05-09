import "./main.css";
import Cow from "../../images/cow.png";

const Main = () => {
    return(
        <div class="mainBackground" id="main">
            <div class="mainContainerBackground">
                <div class="mainContainer">
                    <div class="textAndIcons">
                        <h1 class="hiIm">Hi, I'm</h1>
                        <h1 class="Grace">Grace!</h1>
                    </div>
                    <img src={Cow} alt="brown cow" class="cowImage"/>
                    <p class="notCow">(I'm not a cow...I'm a person.)</p>
                </div>
                
            </div>
        </div>
    );
};

export default Main