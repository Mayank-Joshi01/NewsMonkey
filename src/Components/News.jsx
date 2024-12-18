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
  const [page, setPage] = useState('')
  const [totalResults, setTotalResults] = useState(0)

  const topic = props.topic
  const country = props.country
  const category = props.category
  const Api_Key = props.Api_Key
  const SetProgress = props.SetProgress
  const q = props.q


  const FetchingData = async ()=> {
    SetProgress(10)
    const url = ` https://newsdata.io/api/1/latest?apiKey=${Api_Key}${country?"&country="+country:""}${category?"&category="+category:""}${q?"&q="+q:""}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.results);
    setTotalResults(parseData.totalResults)
    setPage(parseData.nextPage)
    setLoading(false)
    SetProgress(100)
  }


useEffect(() => {
// eslint-disable-next-line
  FetchingData();
  document.title = `NewsMonkey - ${capitalizeTheFirstLetter(category?category:q)}`
  },[country])

  const fetchMoreData = async () => {
    const url = `https://newsdata.io/api/1/latest?apiKey=${Api_Key}${country?"&country="+country:""}${category?"&category="+category:""}&page=${page}${q?"&q="+q:""}`;
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(articles.concat(parseData.results));
    setPage(parseData.nextPage)
  };


    return (

      <div className="container my-3">
        <h2 className='text-center heading'>NewsMonkey -{capitalizeTheFirstLetter(category?category:topic)} Headlines {category==="world"?"":(props.countryname?props.countryname:"")}</h2>
{loading && <Spinner/>} 
        <InfiniteScroll
        
          dataLength={articles.length}
          next={fetchMoreData}
          style={{overflow: 'hidden'}}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="row">
            {(articles.filter((item, index, self) => {
  return self.findIndex(i => i.title === item.title) === index;
})).map((element) => {
              return element.title !== "[Removed]" && <div className="col-md-4" key={element.link}>
                <NewsItem title={(element.title) ? element.title.slice(0, 45) + "..." : ""} description={element.description ? element.description.slice(0, 88) + "..." : ""} img_url={element.image_url} news_url={element.link} author={element.author ? element.creator : "Unknown"} source={element.source_id} />
              </div>
            })}
          </div>
        </InfiniteScroll>

      </div>
    )
  }

export default News