import React, { Component } from "react";
//import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,date,source } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">Written by {author?author:"Unknown"} on {date}</small></p>
            <p className="badge rounded-pill bg-danger">{source}</p>

            <div><a
              
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer" 
              
              className="btn btn-primary"
            >
           
              Full Article
           </a> </div>
          </div>
        </div>
      </div>
    );
  }
}
