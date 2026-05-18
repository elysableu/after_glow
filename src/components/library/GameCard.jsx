export default function GameCard({ game }) {
    
    return (
        <div className="gameCard">
            { console.log("I'm here")}
            <h3>{game.name}</h3>
            <button>Play!</button>
        </div>
    )
}