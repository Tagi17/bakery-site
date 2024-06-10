

const Recipe = () => {
    return (
        <div>
               <div className="recipe-container">
        <div className="recipe-header">
            <h1>Recipe Step by Step</h1>
        </div>
        <div className="recipe-step">
            <div className="step-detail">
                <h2>EGG-BASED CRÈME ANGLAISE</h2>
                <div className="ingredients">
                    <p>588 g Whole milk</p>
                    <p>252 g Heavy cream 36%</p>
                    <p>168 g Eggs</p>
                    <p>67 g Sugar</p>
                </div>
                <div className="instructions">
                    <p>Mix the eggs and sugar without beating too much. Bring the cream and milk to a boil and combine the two mixtures...</p>
                </div>
            </div>
            <div className="step-detail">
                <h2>INTENSE KOMUNTU 80% CRÈMEUX</h2>
                <div className="ingredients">
                    <p>285 g Egg-based crème anglaise</p>
                    <p>115 g KOMUNTU 80%</p>
                </div>
                <div className="instructions">
                    <p>Heat the crème anglaise and mix with an immersion blender, then gradually combine with the partially melted chocolate...</p>
                </div>
            </div>
        </div>
    </div>
        </div>
)}
export default Recipe;