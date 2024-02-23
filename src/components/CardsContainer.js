import React from "react";
import Card from "./Card";

function CardsContainer({hogs}) {

function handleCardClick(event) {
    let cardClassList = event.currentTarget.children[2].classList;
    if(cardClassList.contains("hidden")) return cardClassList.remove("hidden");
    return cardClassList.add("hidden");
}

    return(
        <div className="ui grid container">
            <div className="ui link cards">
                {hogs.map(hog => <Card 
                    key={hog.name} 
                    name={hog.name} 
                    img={hog.image}
                    specialty={hog.specialty}
                    weight={hog.weight}
                    greased={hog.greased}
                    highestMedal={hog["highest medal achieved"]}
                    onClick={handleCardClick}
                />)}
            </div>
        </div>
    )
}

export default CardsContainer;