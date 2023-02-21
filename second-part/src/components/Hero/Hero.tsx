import {useState} from "react";
import ToolTip from "../ToolTip/ToolTip";
import {Player} from "../../pages/Game/Game";
import heroWin from "../../icon/hero/hero1.png";
import heroLose from "../../icon/hero/hero2.png";
import "./style.css"

interface Props {
    player: Player,
}

const Hero = ({player}: Props) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div
                className="player"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                <ToolTip show={show} player={player}/>

                <div className="heroData">
                    <p>{player.nickname}</p>
                    <p>scores: {player.scores}</p>
                </div>
                <img
                    src={player.isAlive ? heroWin : heroLose}
                    alt={player.isAlive ? "win hero" : "lose hero"}/>
            </div>
        </>
    );
}

export default Hero;
