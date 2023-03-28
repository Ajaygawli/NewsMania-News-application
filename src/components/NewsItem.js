import React, { Component } from 'react'


export class NewsItem extends Component {


  
    
  render() {
    let {title, description, imageUrl,newsUrl}= this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwgvU7a1aZqDpzDQ8xxvhl7x-4nDBY47D0Zg0I2iNwA&s":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} className="btn btn-dark btn-sm">Read More</a>
            </div>
          </div>
       
      </div>
    )
  }
}

export default NewsItem
