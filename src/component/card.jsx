import "./card.css";
import Icon1 from "../assets/images/icon-ethereum.svg"
import Icon2 from "../assets/images/icon-clock.svg"
import Icon3 from "../assets/images/icon-view.svg"

export default function Card() {
    return (
        <div className="carte">
            <div className="cardHeader">
               
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
                    <img src="" alt="" />
                    <p>Creation of Jules Wyvern</p>
                </div>
            </div>
        </div>
    )
}