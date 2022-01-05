import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
               This is News
               <NewsItem/> 
               <NewsItem/>
               <NewsItem/>
               <NewsItem/>
            </div>
        )
    }
}
