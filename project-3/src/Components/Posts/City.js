import React, { Component } from 'react';
import axios from 'axios'
import './city.css';
import SingleCity from './SingleCity';
import { Link, Route } from 'react-router-dom';
import { postPost,indexPosts } from '../../services/api_helper';





class City extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            posts:[]
        }
    }

    createPost = async (e, postData, cityId) => {
        e.preventDefault();
        await postPost(postData, cityId);
    }

    async componentDidMount() {
        const topCity = await axios.get("http://localhost:3001/city/all")
        const post = await indexPosts()
        console.log(this.props.cityId)
        
        this.setState({
          cities: topCity.data, 
          posts: post,
          
        })
      }

    render(){
    return (
            <div>
            <h2>Cities</h2>
            {this.state.cities.map(city => {
                return (
                    <div key= {city.id}>
                        <Link to={`/city/${city.id}`}>
                            <h2>{city.name}</h2>
                            <img src={city.img} alt="city"/>
                        </Link>
                    </div>
                )
            })}
             <Link to="/posts/new">see all posts</Link>
            <Route path="/city/:id" render={(props) => {
                return <SingleCity 
                  cities={this.state.cities}
                  cityId={props.match.params.id}
                  handleSubmit={this.createPost}
                  posts={this.state.posts}
                  />
               

        }} />
        </div>
        )
    }
}
        
    
export default City;