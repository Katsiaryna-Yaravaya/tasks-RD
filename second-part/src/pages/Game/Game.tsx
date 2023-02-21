import {useEffect, useState} from "react";
import Hero from "../../components/Hero/Hero";

export interface Player {
    nickname: string,
    scores: number,
    isAlive: boolean,
    deaths: number,
    kills: number,
    _id: string
}

const Game = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/players')
            .then(response => response.json())
            .then(result => setPlayers(result));
    }, [])

    return (
        <div className="game">
            {players.map((item: Player) => {
                return <Hero player={item} key={item._id}/>
            })}

        </div>
    );
}

export default Game;
