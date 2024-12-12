import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeTheFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      articles :[],
      loading: true,
      page: 1,
      totalResults :0,
    }
    document.title = `NewsMonkey-${this.capitalizeTheFirstLetter(this.props.category)}`
  }

  async FetchingData() {
    this.props.SetProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.Api_Key}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({
      loading: true,
    })
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false, })
    this.props.SetProgress(100)
  }


  async componentDidMount() {
    this.FetchingData()
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1, });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.Api_Key}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults })
  };


  render() {
    return (

      <div className="container my-3">
        <h2 className='text-center'>NewsMonkey - Top{this.capitalizeTheFirstLetter(this.props.category) === "General" ? "" : ` ${this.capitalizeTheFirstLetter(this.props.category)} `}Headlines</h2>

        <InfiniteScroll
        
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          style={{overflow: 'hidden'}}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return element.title !== "[Removed]" && <div className="col-md-4" key={element.url}>
                <NewsItem title={(element.title) ? element.title.slice(0, 45) + "..." : ""} description={element.description ? element.description.slice(0, 88) + "..." : ""} img_url={element.urlToImage} news_url={element.url} date={element.publishedAt.slice(0, 10)} author={element.author ? element.author : "Unknown"} source={element.source.name} />
              </div>
            })}
          </div>
        </InfiniteScroll>

      </div>
    )
  }
}

export default News