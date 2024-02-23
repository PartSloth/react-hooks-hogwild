import React from "react";

function Card({name, img, specialty, weight, greased, highestMedal, onClick}) {
    return(
        <div className="card" onClick={onClick}>
                <img className="pigPicture" src={img} alt={name}/>
            <div className="content">
                <h3>{name}</h3>
            </div>
            <div className="hidden details">
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased: {greased ? "Yes" : "No"}</p>
                <p>Highest Medal Achieved: {highestMedal}</p>
            </div>
        </div>
    )
}

export default Card;