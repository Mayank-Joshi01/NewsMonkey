// import PropTypes from 'prop-types'
import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

  const capitalizeTheFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const country = props.country
  const category = props.category
  const Api_Key = props.Api_Key
  const pageSize = props.pageSize
  const SetProgress = props.SetProgress


  const FetchingData = async ()=> {
    SetProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${Api_Key}&pageSize=${pageSize}&page=${page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults)
    setLoading(false)
    SetProgress(100)
  }


useEffect(() => {
  FetchingData();
},[])


  const fetchMoreData = async () => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${Api_Key}&pageSize=${pageSize}&page=${page+1}`;
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(articles.concat(parseData.articles));
  };


    return (

      <div className="container my-3">
        <h2 className='text-center'>NewsMonkey - Top{capitalizeTheFirstLetter(props.category) === "General" ? "" : ` ${capitalizeTheFirstLetter(props.category)} `}Headlines</h2>

        <InfiniteScroll
        
          dataLength={articles.length}
          next={fetchMoreData}
          style={{overflow: 'hidden'}}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="row">
            {!loading && articles.map((element) => {
              return element.title !== "[Removed]" && <div className="col-md-4" key={element.url}>
                <NewsItem title={(element.title) ? element.title.slice(0, 45) + "..." : ""} description={element.description ? element.description.slice(0, 88) + "..." : ""} img_url={element.urlToImage} news_url={element.url} date={element.publishedAt.slice(0, 10)} author={element.author ? element.author : "Unknown"} source={element.source.name} />
              </div>
            })}
          </div>
        </InfiniteScroll>

      </div>
    )
  }

export default News