import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.attraction.imageUrl} alt="attraction" />
      <div className="card-text">
        <div className="card-text-header">
          <img src="location.png" alt="location" />
          <h5>{props.attraction.location.toUpperCase()}</h5>
          <a href={props.attraction.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <h2>{props.attraction.title}</h2>
        <p><strong>{props.attraction.startDate} - {props.attraction.endDate}</strong></p>
        <p>{props.attraction.description}</p>
      </div>
    </div>
  )
}
