import React, { Component } from 'react';
import axios from 'axios'

class City extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: []
        }
    }

    async componentDidMount() {
        const topCity = await axios.get("http://localhost:3001/city/all")
        console.log(topCity.data);
        this.setState({
          cities: topCity.data
        })
      }

    render(){
    return (
            <div>
            <h2>Cities</h2>
            {this.state.cities.map(city => {
                return (
                    <div>
                        <img src={city.img} alt="city" />
                        <h2>{city.name}</h2>
                    </div>
                )
            })}
        </div>
        )
    }
}
        
    
export default City;