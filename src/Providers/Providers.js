import React from 'react';
import './Providers.css';

const colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
                   "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

const providers_data = [
  {'name': 'Virgin', 'color': '#393E41', 'radius': '300px'},
  {'name': 'Fido', 'color': '#E94F37', 'radius': '240px'},
  {'name': 'Bell', 'color': '#1C89BF', 'radius': '200px'},
  {'name': 'Rogers', 'color': '#A1D363', 'radius': '130px'},
]

class Provider extends React.Component {
  render = () => {
    var circleStyle = {
      padding: "10px",
      margin: "50px",
      display:"inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: this.props.radius,
      width: this.props.radius,
      height: this.props.radius,
    };
    return (
      <div style={{float: 'left'}}>
        <div style={circleStyle}></div>
        <p style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>{this.props.name}</p>
      </div>
      
    );
  }
}

function Providers() {
    return (
      <div>
        {
          /* {colors.map((color) => 
            <Provider key={color} bgColor={color}/>
          )} */
          providers_data.map((provider_data) => 
            <Provider key={provider_data.name} bgColor={provider_data.color} name={provider_data.name} radius={provider_data.radius}/>
          )
        }
      </div>
    )  
}

export default Providers;
