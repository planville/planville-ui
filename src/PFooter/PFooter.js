import React from 'react';
import './PFooter.css';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import footer from './jira.png'

const PFooter = () => {
    return (
      <div class="mt-5 pt-5 pb-5 footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xs-12 about-company">
            <h2>PLANVILLE</h2>
            <br/>
            <p class="pr-5 text-white-50">At Planville, we are here to help you choose the best telecom providers and devices, by comparing them for you.</p>
            <p>
            <a href="https://github.com/planville" target="_blank" className="linked"><i class="fa fa-github"></i></a>
            <a href="https://planville.atlassian.net/secure/RapidBoard.jspa?rapidView=2&projectKey=PLAN&selectedIssue=PLAN-37" target="_blank" className="linked"><img src={footer} alt="Jira" height="25" width="25"></img></a>
            </p>
          </div>
          <div class="col-lg-3 col-xs-12 links">
            <h4 class="mt-lg-0 mt-sm-3">LINKS</h4>
            <br/>
              <Link to="/home" className="linked">Home</Link><br/>
              <Link to="/about" className="linked">About us</Link><br/> 
              <Link to="/contact" className="linked">Contact us</Link><br/>
              <Link to="/providers" className="linked">Providers</Link> <br/>
              
          </div>
          <div class="col-lg-4 col-xs-12 location">
            <h4 class="mt-lg-0 mt-sm-4">LOCATION</h4>
            <br/>
            <p>401 Sunset Ave, Windsor, ON N9B 3P4, Canada</p>
            <p class="mb-0"><i class="fa fa-phone mr-3"></i> +1 800 1234567</p>
            <p><i class="fa fa-envelope-o mr-3"></i> contact@planVille.com</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col copyright">
            <p class=""><small class="text-white-50">© 2020. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
      </div>
    );
  }

export default PFooter;
