import React, { Component } from 'react';
import axios from 'axios'
import './city.css';
import SingleCity from './SingleCity';
import { Link, Route } from 'react-router-dom';



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
                        <Link to={`/city/${city.id}`}>
                            <h2>{city.name}</h2>
                        </Link>
                    </div>
                )
            })}
        <Route path="/city/:id" render={(props) => {
          return <SingleCity 
                  cities={this.state.cities}
                  cityId={props.match.params.id} />
        }} />
        </div>
        )
    }
}
        
    
export default City;