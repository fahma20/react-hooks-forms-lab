// import React, { useState } from "react";

// function Filter({ onCategoryChange }) {
//   const [inputField, setInputField] = useState("");  // Correct state initialization

//   // Handle input field changes
//   const handleInputChange = (event) => {
//     setInputField(event.target.value);  // Update the inputField state
//     // You can also pass the input value to the parent component if needed
//     // If you want to trigger a category filter change on every input, call onCategoryChange
//   };

//   return (
//     <div className="Filter">
//       <input 
//         type="text" 
//         name="search" 
//         placeholder="Search..." 
//         value={inputField}  // Controlled input, bound to state
//         onChange={handleInputChange}  // Handle the input changes
//       />
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;

import React from "react";

function Filter({ search, onSearchChange, selectedCategory, onCategoryChange }) {
  // Handle change for the search input
  const handleSearchInputChange = (event) => {
    onSearchChange(event.target.value); // Pass the new search term to the parent
  };

  // Handle change for the category dropdown
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value); // Pass the selected category to the parent
  };

  return (
    <div className="Filter">
      {/* Search input */}
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={handleSearchInputChange} // Controlled input for search
        placeholder="Search items"
      />

      {/* Category dropdown */}
      <label htmlFor="category">Category: </label>
      <select 
        id="category" 
        value={selectedCategory} // Controlled value for the category
        onChange={handleCategoryChange} // Controlled handler for category selection
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
