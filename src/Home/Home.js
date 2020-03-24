import React from 'react';
import './Home.css';
import SearchCity from '../SearchCity/SearchCity';
import CompareBYOD from '../CompareBYOD/CompareBYOD';

function Home() {
  return (
    <div className="Home">
      <SearchCity></SearchCity>
      <CompareBYOD></CompareBYOD>
    </div>
  );
}

export default Home;
