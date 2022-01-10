import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
   articles=[];
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
        };
    
    }
    
    async componentDidMount() {
        let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=bb5af46e035046758652416beb7346da&page=1';
        let data =  await fetch(url);
        let parsedData =  await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    } 

     Prevoius = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=bb5af46e035046758652416beb7346da&page=${this.state.page-1}`;
        let data =  await fetch(url);
        let parsedData =  await data.json();
        this.setState({articles:parsedData.articles,page:this.state.page-1})
    } 
    Next = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=bb5af46e035046758652416beb7346da&page=${this.state.page+1}`;
        let data =  await fetch(url);
        let parsedData =  await data.json();
        this.setState({articles:parsedData.articles,page:this.state.page+1})
    } 
     
    render(){
        return (
            <div  className="container">
            <h3>NEWS-HEADLINES</h3>
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/> 
                   </div> 
                })}      
            </div>     
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-secondary " onClick={this.Prevoius}>&larr; Previous</button>
        <button type="button" className="btn btn-secondary " onClick={this.Next}>&rarr; Next</button>
        </div>
        </div>
        
            
        )
    }

}