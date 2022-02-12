import React, { Component } from "react";
//import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };

    //document.title = `${(this.props.category)} - NewsMonkey`;
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
   async fetchMoreData(){

      const url=`https://newsapi.org/v2/top-headlines?country=${(this.props.country)}&category=${(this.props.category)}&apiKey=bb5af46e035046758652416beb7346da&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data =  await fetch(url);
      let parsedData =  await data.json();
      this.setState({page:this.state.page,articles:parsedData.articles,loading:false})
  
}
  async componentDidMount() {
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb5af46e035046758652416beb7346da&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  
  Prevoius = async () => {
    //document.title = `${(this.props.category)} - NewsMonkey`;
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=bb5af46e035046758652416beb7346da&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      loading: false,
    });
    this.setState({ page: this.state.page - 1 });
  };
  Next = async () => {
    //document.title = `${(this.props.category)} - NewsMonkey`;
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=bb5af46e035046758652416beb7346da&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      loading: false,
    });

    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center mb-3 my-3">
          News-Headlines-{this.capitalizeFirstLetter(this.props.category)}
        </h3>

        {this.state.loading && <Loading />}
        <div className="row">
          <InfiniteScroll
            dataLength={this.state.totalResults}
            next={this.fetchMoreData}
            hasMore={this.state.articles!=this.state.totalResults}
            loader={<Loading/>}
          >
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-secondary "
            onClick={this.Prevoius}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-secondary "
            onClick={this.Next}
          >
            &rarr; Next
          </button>
        </div>
      </div>
    );
  }
}
