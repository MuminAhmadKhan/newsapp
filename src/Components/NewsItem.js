import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    

    render() {
        let {title,description,imageUrl,newsUrl} =this.props;
        return (
            <div>
                <div className="card" >
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a rel='noreferrer'href={newsUrl} target='_blank'className="btn btn-primary">Full Article</a>
                </div>
</div>
            </div>
        )
    }
}
