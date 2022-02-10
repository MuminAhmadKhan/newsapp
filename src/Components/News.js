import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
        country : 'in' ,
        pageSize : 6 ,
        category :'general' 
    }
     
    static propTypes = {
        country : PropTypes.string ,
        pageSize : PropTypes.number ,
        category : PropTypes.string
    }

    
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        };
    

    }
     
    
    async componentDidMount() {
        let url=`https://newsapi.org/v2/top-headlines?country=${(this.props.country)}&category=${(this.props.category)}&apiKey=bb5af46e035046758652416beb7346da&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =  await fetch(url);
        let parsedData =  await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    } 

     Prevoius = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${(this.props.country)}&category=${(this.props.category)}&apiKey=bb5af46e035046758652416beb7346da&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =  await fetch(url);
        let parsedData =  await data.json();
        this.setState({page:this.state.page-1,articles:parsedData.articles,loading:false})
    } 
    Next = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${(this.props.country)}&category=${(this.props.category)}&apiKey=bb5af46e035046758652416beb7346da&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data =  await fetch(url);
        let parsedData =  await data.json();
        this.setState({page:this.state.page+1,articles:parsedData.articles,loading:false})
    } 
     
    render(){
        return (
            <div  className="container">
            <h3>NEWS-HEADLINES</h3>
            {this.state.loading && <Loading/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/> 
                   </div> 
                })}      
            </div>     
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" className="btn btn-secondary " onClick={this.Prevoius}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20) } type="button" className="btn btn-secondary " onClick={this.Next}>&rarr; Next</button>
        </div>
        </div>
        
            
        )
    }

}