// SearchBar.jsx
import SearchBarSvg from '../../assets/mainpage/searchbar.svg';
// import ArrowDownSvg from '../../assets/mainpage/baseline-arrow_drop_down-24px.svg';

// Use SearchBarSvg and ArrowDownSvg components in your JSX.

import React from 'react';
const SearchBar = () => {
  return (
    <div className="search-bar">
        <SearchBarSvg />
      <input type="text" placeholder="Search for your favorite groups in ATG" />
    </div>
  );
}

export default SearchBar;
