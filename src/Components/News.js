import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div  className="container">
               <h3>NEWS-HEADLINES</h3>
               <div class="row">
               <div className="col-md-4">
                <NewsItem/> 
               </div> 
               <div className="col-md-4">
                <NewsItem/>
                </div>
                <div className="col-md-4">
                <NewsItem/>  
                </div>
               </div>
             
            </div>
            
        )
    }
}
