import React from 'react';
import './Ratings.css';

const Ratings = () => {
    return (
        <div class="row">
          <div class="side">
            <div>Virgin</div>
          </div>
          <div class="middle" >
            <div class="bar-container">
              <div class="bar-5"></div>
            </div>
          </div>
          <div class="side">
            <div>Bell</div>
          </div>
          <div class="middle">
            <div class="bar-container">
              <div class="bar-4"></div>
            </div>
          </div>
        </div>
    )
}


export default Ratings;