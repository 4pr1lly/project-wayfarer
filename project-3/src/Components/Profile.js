import React from 'react';
import "./profile.css";
import { Link } from 'react-router-dom';


function Profile (props){
    if(props.currentUser){
        return(
        <div className='profile-flex'>
            <h1 className="profile-intro">Welcome: {props.currentUser.username}</h1>
            <h2><u>Profile Page</u></h2>
            <img className="profile-img" src="https://wallpaperaccess.com/full/371408.jpg" />
            <h3> Member Since: {props.currentUser.createdAt} </h3>
            <Link className="city-link" to="/city">Check Out The Cities</Link>
        </div>
        )
    } else {
        return (
            <div className="flex-container">
                <p> You must be logged in!</p>
            </div>
        )
    }
}
export default Profile;