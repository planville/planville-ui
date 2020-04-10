import React from 'react';
import './Providers.css';

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

class Providers extends React.Component {

  constructor() {
    super();
    this.state = {
      providers_data: []
    }
  }

  async getProviders() {
    
    // eslint-disable-next-line no-useless-concat
    const url = "http://127.0.0.1:8000/avg_rating?city_name=" + "Windsor";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    let providers_data_api = await this.getProviders();
    console.log("Final data");
    console.log(providers_data_api);

    this.setState((state) => {
      return {providers_data: providers_data_api}
    })
    console.log("State changed")
    console.log(this.state.providers_data)
  }

  render() {
    return (
      <div>
        {
          this.state.providers_data.map((provider_data) => 
            <Provider key={provider_data.name} bgColor={provider_data.color} name={provider_data.name} radius={provider_data.radius}/>
          )
        }
      </div>
    )  
  }
}

export default Providers;
