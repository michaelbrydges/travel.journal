import React from "react";

export default function Card(props) {
  
  return (
    <div className="card_container">
      <div className="img_container">
        <img src={`./images/${props.img}`} alt=""></img>
      </div>
      <div className="card_info_container">
        <div className="location_container">
          <img src="./images/maps.png" alt="google maps pin" className="card_pin"></img>
          <p className="card_location">{props.location}</p>
          <a href={`${props.googleMapsUrl}`} target="_blank" rel="noopener noreferrer" className="card_maps"><u>View on Google Maps</u></a>
        </div>
        <p className="card_title"><b>{props.title}</b></p>
        <h4 className="card_date">{props.startDate} - {props.endDate}</h4>
        <p className="card_description">{props.description}</p>
      </div> 
    </div>
  )
}