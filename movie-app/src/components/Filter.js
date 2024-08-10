import React, { useState } from 'react';

const Filter = ({ setSearchTerm, setRating }) => {
  const handleTitleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Search by rating"
        onChange={handleRatingChange}
        min="1"
        max="10"
      />
    </div>
  );
};

export default Filter;
