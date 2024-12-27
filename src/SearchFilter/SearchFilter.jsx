import React, { useState, useMemo } from "react";
import "./SearchFilter.css"; // Import the CSS file

const SearchFilter = () => {
  const items = [
    "App",
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];

  const [query, setQuery] = useState("");

  // const filteredItems = items.filter((item) =>
  //   item.toLowerCase().includes(query.toLowerCase())
  // );

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  return (
    <div className="search-container">
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))
        ) : (
          <p className="no-items">No items found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
