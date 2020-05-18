import React, { useState } from "react";

const AddIngredientForm = (props) => {
    const [qty, setQty] = useState(props.qty || "");
    const [qtyType, setQtyType] = useState(props.qtyType || "");
    const [name, setName] = useState(props.name || "");

    const qtyChanged = (e) => {
        const inQty = e.target.value;
        const qtyStrRegex = /^\d{1,}(\.\d{0,2})?(\ )?(\d{1,})?(\/)?(\d{1,})?$/;

        if (!inQty || inQty.match(qtyStrRegex)) {
            setQty(inQty);
        }
    };

    const addIngredient = (e) => {
        e.preventDefault();

        console.log('Added');

        setQty("");
        setQtyType("");
        setName("");
    };

    return (
        <form className="content-container" >
            <input placeholder="qty" value={qty} onChange={qtyChanged} />
            <select value={qtyType} onChange={(e) => setQtyType(e.target.value)}>
                <option value="pinch">Pinch</option>
                <option value="cup">Cup</option>
                <option value="tablespoon">Tablespoon</option>
                <option value="teaspoon">Teaspoon</option>
            </select>
            <input
                placeholder="Ingredient name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addIngredient} >Add Ingredient</button>
        </form>
    );
};

export default AddIngredientForm;
