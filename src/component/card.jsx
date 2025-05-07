import "./card.css";

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
                <div>
                    <div id="eth"></div>
                    <div id="days"></div>
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