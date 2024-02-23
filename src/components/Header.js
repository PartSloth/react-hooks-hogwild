import React from "react";

function Header({onGreasedClick, onCategoryChange}) {
    return(
        <div className="header">
            <form>
                <label>
                <button name="greased" onClick={onGreasedClick}>Greased</button>
                </label>
                <label>
                Sort By:
                <select name="category" onChange={onCategoryChange}>
                    <option name="name">Name</option>
                    <option name="weight">Weight</option>
                </select>
                </label>
            </form>
        </div>
    )
}

export default Header;