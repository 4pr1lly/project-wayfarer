import React from 'react';

function SingleCity(props) {
    const foundCity = props.cities.filter(city => {
        return city.id === parseInt(props.cityId)
    })
    console.log(foundCity)
    return (
        <div>
            {foundCity[0] && 
            <div><h3>{foundCity[0].name}</h3>
            <img src={foundCity[0].img} />
            </div>
            }
        </div>
    )
}

export default SingleCity;