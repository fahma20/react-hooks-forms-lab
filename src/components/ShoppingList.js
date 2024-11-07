import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [shoppingList, setShoppingList] = useState(items);

  // Handle category change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Handle search text change
  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  // Handle item form submission
  function handleItemFormSubmit(newItem) {
    setShoppingList((prevItems) => [...prevItems, newItem]);
  }

  // Filter items based on category and search text
  const itemsToDisplay = shoppingList.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase()); // Case-insensitive search

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} /> {/* Pass handler */}
      <Filter
        search={searchText}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
