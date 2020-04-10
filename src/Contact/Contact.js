import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';

class Contact extends React.Component{
  
  render()
  {
    return (
      <div>
      <div class="container-contact100">
      <div class="wrap-contact100">
        <form class="contact100-form validate-form">
          <span class="contact100-form-title">
            Send Us A Message
          </span>
  
          <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
            <input id="first-name" class="input100" type="text" name="first-name" placeholder="First name"/>
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
            <input class="input100" type="text" name="last-name" placeholder="Last name"/>
            <span class="focus-input100"></span>
          </div>
  
          <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <input id="email" class="input100" type="text" name="email" placeholder="Enter Email address"/>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100">
            <input id="phone" class="input100" type="text" name="phone" placeholder="Enter phone number"/>
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate = "Message is required">
            <textarea id="message" class="input100" name="message" placeholder="Write us a message"></textarea>
            <span class="focus-input100"></span>
          </div>
  
          <div class="container-contact100-form-btn">
            <button class="contact100-form-btn">
              Send Message
            </button>
          </div>
        </form>
  
        <div class="contact100-more flex-col-c-m">
          <div class="flex-w size1 p-b-47">
            <div class="txt1 p-r-25">
              <span class="lnr lnr-map-marker"></span>
            </div>
  
            <div class="flex-col size2">
              <span class="txt1 p-b-20">
              <i className="fa fa-map-marker"></i>Address
              </span>
  
              <span class="txt3">
              401 Sunset Ave, Windsor, ON N9B 3P4, Canada
              </span>
            </div>
          </div>
  
          <div class="dis-flex size1 p-b-47">
            <div class="txt1 p-r-25">
              <span class="lnr lnr-phone-handset"></span>
            </div>
  
            <div class="flex-col size2">
              <span class="txt1 p-b-20">
              <i className="fa fa-phone"></i> Lets Talk
              </span>
  
              <span class="txt3">
                +1 800 1234567
              </span>
            </div>
          </div>
  
          <div class="dis-flex size1 p-b-47">
            <div class="txt1 p-r-25">
              <span class="lnr lnr-envelope"></span>
            </div>
  
            <div class="flex-col size2">
              <span class="txt1 p-b-20">
              <i className="fa fa-envelope"></i>General Support
              </span>
  
              <span class="txt3">
                contact@planVille.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );

  }
}
export default Contact;