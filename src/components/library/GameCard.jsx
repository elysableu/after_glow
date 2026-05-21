import { useNavigate } from 'react-router-dom';

export default function GameCard({ game }) {
    const navigate = useNavigate()

    return (
        <div className="gameCard">
            { console.log("I'm here")}
            <h3>{game.name}</h3>
            <button onClick={() => navigate(`/${game.id}`)}>Play!</button>
        </div>
    )
}