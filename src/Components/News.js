import React, { useState,useEffect } from "react";
//import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
//import LoadingBar from 'react-top-loading-bar'

const News =  (props)=> {
  

  
    //document.title = `${(props.category)} - NewsMonkey`;
  
  const [articles,setArticles] =useState([])
  const [page,setPage] =useState(1)
  const [loading,setLoading] =useState(true)
  const [totalResults,setResults]=useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const fetchMoreData = async () => {

      const url=`https://newsapi.org/v2/top-headlines?country=${(props.country)}&category=${(props.category)}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      setLoading(true)
      let data =  await fetch(url);
      let parsedData =  await data.json();
      setArticles(articles.concat(parsedData.articles))
      setResults(parsedData.totalResults)
      setLoading(false)
}

    
   useEffect(()=> {
   document.title = `${(props.category)} - NewsMonkey`
    const first = async ()=>{
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(40);
      let parsedData = await data.json();
      props.setProgress(80);
      
      setArticles(parsedData.articles);
      setResults(parsedData.totalResults);
      setLoading(false);
     
      props.setProgress(100);};
      first();
              // eslint-disable-next-line
   } ,[])
  
//   Prevoius = async () => {
//     //document.title = `${(props.category)} - NewsMonkey`;
//     const url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apiKey=${props.apiKey}&page=${
//       state.page - 1
//     }&pageSize=${props.pageSize}`;
//     setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setState({
//       page: state.page,
//       articles: parsedData.articles,
//       loading: false,
//     });
//     setState({ page: state.page - 1 });
//   };
//   Next = async () => {
//     //document.title = `${(props.category)} - NewsMonkey`;
//     const url = `https://newsapi.org/v2/top-headlines?country=${
//       props.country
//     }&category=${
//       props.category
//     }&apiKey=${props.apiKey}&page=${
//       state.page + 1
//     }&pageSize=${props.pageSize}`;
//     setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setState({
//       page: state.page,
//       articles: parsedData.articles,
//       loading: false,
//     });

//     setState({ page: state.page + 1 });
//   };

   
    return (<>
      
        <h3 className="text-center mb-3 " style={{ marginTop: '90px'}}>
          News-Headlines-{capitalizeFirstLetter(props.category)}
        </h3>
      
            
        
        {loading && <Loading />}
        
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length!==totalResults}
            loader={<Loading/>}
          >
        <div className="container">
            <div className="row">
            {articles.map((element) => {
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
        </div>
        </div>
        </InfiniteScroll>
        
        </>
    //     {<div className="container d-flex justify-content-between">
    //       <button
    //         disabled={state.page <= 1}
    //         type="button"
    //         className="btn btn-secondary "
    //         onClick={Prevoius}
    //       >
    //         &larr; Previous
    //       </button>
    //       <button
    //         disabled={
    //           state.page + 1 > Math.ceil(state.totalResults / 20)
    //         }
    //         type="button"
    //         className="btn btn-secondary "
    //         onClick={Next}
    //       >
    //         &rarr; Next
    //       </button> }
    //     //    </div>
    //     //</>
    //   //</div>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News