import "./card.css";
import Icon1 from "../assets/images/icon-ethereum.svg"
import Icon2 from "../assets/images/icon-clock.svg"
import Icon3 from "../assets/images/icon-view.svg"
import Image1 from "../assets/images/image-avatar.png"

export default function Card() {
    return (
        <div className="carte">
            <div className="cardHeader">
             <div className="hover"> <img src={Icon3} alt="" /></div>  
            </div>

            <div className="cardBody">
                <div className="cardTitle">
                    <p>Equilibrium #3429</p>
                </div>
                <div className="cardP">
                    <p>Our Equilibrium collection promotes balance and calm.</p>
                </div>
                <div className="cardMoney">
                    <div id="eth"> <img src={Icon1} alt="" /> 0.041 ETH</div>
                    <div id="days"> <img src={Icon2} alt="" /> 3 days left</div>
                </div>
            </div>

            <div className="cardFooter">
                <div className="creator">
                    <img src={Image1} alt="" />
                    <p> <span>Creation of</span> Jules Wyvern</p>
                </div>
            </div>
        </div>
    )
}