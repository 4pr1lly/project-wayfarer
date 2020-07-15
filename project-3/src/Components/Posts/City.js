import React, { Component } from 'react';
import axios from 'axios'
import './city.css';
import SingleCity from './SingleCity';
import { Link, Route } from 'react-router-dom';
import { postPost, indexPosts } from '../../services/api_helper';





class City extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            posts: []
        }
    }

    createPost = async (e, postData, cityId) => {
        e.preventDefault();
        await postPost(postData, cityId);
    }

    async componentDidMount() {
        const topCity = await axios.get("http://localhost:3001/city/all")
        const post = await indexPosts()
        this.setState({
            cities: topCity.data,
            posts: post
        })
      }

    render(){
    return (
        <div>
            <div className="city-container">
            {this.state.cities.map(city => {
                return (
                    <div className="cities">
                        <Link to={`/city/${city.id}`}>
                            <h2 className="city-name">{city.name}</h2>
                        </Link>
                    </div>
                )
            })}
            <img className="waterfall-img" src="https://images.unsplash.com/photo-1523224949444-170258978eef?ixlib=rb-1.2.1&w=1000&q=80" />
        </div>
            <div className="city-content">
            <Route path="/city/:id" render={(props) => {
                return <SingleCity 
                  cities={this.state.cities}
                  cityId={props.match.params.id}
                  handleSubmit={this.createPost}
                  posts={this.state.posts}
                  />
        }} />
            </div>
        </div>
        )
    }
}
        
    
export default City;