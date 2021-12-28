import "./main.css";
import Cow from "../../images/cow.png";

const Main = () => {
    return(
        <div class="mainBackground" id="main">
            <div class="mainContainerBackground">
                <div class="mainContainer">
                    <div class="textAndIcons">
                        <div class="hiImGrace">
                            <h1>Hi, I'm</h1>
                            <h1>Grace!</h1>
                        </div>
                    </div>
                    <img src={Cow} alt="brown cow" class="cowImage"/>
                    <p class="notCow">(I'm not a cow...I'm a person.)</p>
                </div>
                
            </div>
        </div>
    );
};

export default Main