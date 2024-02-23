import React, {useState} from "react";
import Nav from "./Nav";
import CardsContainer from "./CardsContainer";
import Header from "./Header";

import hogs from "../porkers_data";

function App() {
	const hogsArray = hogs;
	const [hogsDisplayed, setHogsDisplayed] = useState(hogsArray)
	const [greasedIsOn, setGreasedIsOn] = useState(false);

	function handleForm(event) {
		event.preventDefault();
		if(!greasedIsOn) {
			setHogsDisplayed(hogsDisplayed.filter(hog => hog.greased === true));
		} else {
			setHogsDisplayed(hogsArray);
		}
		setGreasedIsOn(greasedIsOn => !greasedIsOn);
	}

	function handleCategoryChange(event) {
		console.log(event.target.value)
		const updatedArray = [...hogsDisplayed]
		if(event.target.value === "Weight") {
			updatedArray.sort((a,b) => (b.weight - a.weight))
		} else {
			updatedArray.sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
		}
		setHogsDisplayed(updatedArray)
	}

	

	return (
		<div className="App">
			<Nav />
			<Header onGreasedClick={handleForm} onCategoryChange={handleCategoryChange}/>
			<CardsContainer hogs={hogsDisplayed}/>
		</div>
	);
}

export default App;
