import React, { useState } from 'react'

const NewsItem = (props) => {

  const [imageLoadError, SetimageLoadError] = useState(true)

  let { title, description, img_url, news_url,author, source } = props

  return (
    < div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div style={{
          display: 'flex',
          position: 'absolute',
          justifyContent: 'flex-end',
          right: 0
        }}>
          <span className=" badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>{source}</span>
        </div>
        <img src={img_url ? img_url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} style={img_url ? {} : { height: "189px" }} onError={e => {
          if (imageLoadError) {
            SetimageLoadError(false)
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
            e.target.style.height = "189px";
          }
        }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={news_url} target='blank' className="btn btn-sm btn-primary">Read More</a>
          <p className="card-text m-0"><small className="text-muted">Author : {author}</small></p>
        </div>
      </div>
    </div>
  )

}

export default NewsItem