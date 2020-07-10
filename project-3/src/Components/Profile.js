import React from 'react'

function Profile (props){
    if(props.currentUser){
        return(
            <div className='profile-flex'>
            <h2> Profile Page</h2>
            <h3> Name: {props.currentUser.name} </h3>
            <h3> Username: {props.currentUser.username} </h3>
            <h3> Profile Create date: {props.currentUser.createdAt} </h3>
            {props.currentUser.City && <h3> Current Location: {props.currentUser.City.name} </h3> }
            {/* <p><em>Password: {props.currentUser.login.password}...test</em></p> */}
        </div>
        )
    } else {
        return (
            <div className="flex-container">
                <p> You must be logged in</p>
            </div>
        )
    }
}
export default Profile;