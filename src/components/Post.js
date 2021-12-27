import React from "react"

export default function Post(props) {
    // console.log(props.post.imageUrl)
  return (
    <div className="post-container">
        <img className="img" src={props.post.imageUrl} />
        <div className="content">
            <div className="content-location">
                <i className="fas fa-map-marker-alt"></i>
                <h4 className="location">{props.post.location}</h4>
                <a href={props.post.googleMapsUrl}><span>View on Google Maps</span></a>
            </div>
            <h1 className="title">{props.post.title}</h1>
            <h4 className="date">{`${props.post.startDate} - ${props.post.endDate}`}</h4>
            <p className="description">{props.post.description}</p>
        </div>
    </div>
  )
}
