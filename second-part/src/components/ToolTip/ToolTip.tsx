import {Player} from "../../pages/Game/Game";
import "./style.css"

interface Props {
    player: Player,
    show: boolean
}

const ToolTip = ({show, player}: Props) => {

    const handleClick = async () => {
        await fetch('http://localhost:8080/changePlayer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({id: player._id})
        });
    }

    return (
        <div className="tooltip" style={show ? {visibility: "visible"} : {}}>
            <div>deaths: {player.deaths}, kills: {player.kills}</div>
            <div>
                <button type="submit" onClick={handleClick}>Add friend</button>
            </div>
        </div>
    );
}

export default ToolTip;
