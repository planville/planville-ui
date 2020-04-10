import React from 'react';
import './Home.css';
import SearchCity from '../SearchCity/SearchCity';
import CompareBYOD from '../CompareBYOD/CompareBYOD';


function Home() {
  return (
    <div className="Home" >
       <div className="container">
       <div class="centered">
         <h3>
           <span>
         Best Deals at your Finger Tips!
         </span>
         </h3>
         </div>
        </div>
      <SearchCity></SearchCity>
      <CompareBYOD></CompareBYOD>
     <br/>
     <br/>
     <br/>
     <br/>
    </div>
  );
}

export default Home;
