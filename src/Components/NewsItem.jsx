import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      imageLoadError: true,
    };
  }
  render() {

    let { title, description, img_url, news_url, date, author, source } = this.props

    return (
      < div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
        <div style={{ display: 'flex',
    position: 'absolute',
    justifyContent: 'flex-end',
    right: 0}}>
            <span class=" badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>{source}</span>
            </div>
          <img src={img_url ? img_url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} style={img_url ? {} : { height: "189px" }} onError={e => {
            if (this.state.imageLoadError) {
              this.setState({
                imageLoadError: false
              });
              e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
              e.target.style.height = "189px";
            }
          }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={news_url} target='blank' className="btn btn-sm btn-primary">Read More</a>
            <p class="card-text m-0"><small class="text-muted">Author : {author}</small></p>
            <p class="card-text"><small class="text-muted">Pusblished At : {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem