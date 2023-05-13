import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    //  deStructuring 
    let {title, description,imageUrl,newsUrl, author, date} = this.props;
    return (
      <div className='my-3'>
      <div className="card" >
  <img src= {!imageUrl ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fawesome-pic&psig=AOvVaw0etwleRIF7TfIBLAXTIKw6&ust=1665079270116000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLihsOXVyfoCFQAAAAAdAAAAABAJ" : imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className='text-muted'>By {author? author : "unknown"} on {new Date(date).toGMTString()}</small></p>

    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
