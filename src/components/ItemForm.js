import React, { useState } from "react";
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid"; // Import uuid to generate unique IDs

function ItemForm(props) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
    setErrorMessage(""); // Reset error message when user starts typing
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemName.trim()) {
      setErrorMessage("Item name cannot be empty");
      return;
    }

    const newItem = {
      id: uuid(), // Generate unique ID
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the parent
    props.onItemFormSubmit(newItem);

    // Reset form after submission
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="itemName">Name:</label>
      <input
        id="itemName"
        type="text"
        name="name"
        value={itemName}
        onChange={handleItemNameChange}
        placeholder="Enter item name"
        aria-invalid={errorMessage ? "true" : "false"} // Mark input as invalid if error exists
        aria-describedby="name-error" // Associate error message with input field
      />
      {errorMessage && <p id="name-error" style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}

      <label htmlFor="itemCategory">Category:</label>
      <select
        id="itemCategory"
        name="category"
        value={itemCategory}
        onChange={handleCategoryChange}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

ItemForm.propTypes = {
  onItemFormSubmit: PropTypes.func.isRequired,
};

export default ItemForm;
