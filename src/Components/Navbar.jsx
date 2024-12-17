//rcep
import { Link } from "react-router-dom";
import React from 'react'

export default function Navbar(props) {
  const handelSearch = (e) => {
    props.setSearch(e.target.value);
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsMonkey</Link>

          <div className="nav-2">

            <li className="nav-item dropdown country">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </a>
              <ul className="dropdown-menu"style={{top:"100px"}}>
                <li><a className="dropdown-item" href="#"><img src="https://img.icons8.com/?size=100&id=63725&format=png&color=000000" alt="" />wordwide</a></li>
                <li><a className="dropdown-item" href="#"><img src="https://img.icons8.com/?size=100&id=esGVrxg9VCJ1&format=png&color=000000" alt=""/>India</a></li>
                <li><a className="dropdown-item" href="#"><img src="https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000" alt="" />USA</a></li>
                <li><a className="dropdown-item" href="#"><img src="https://img.icons8.com/?size=100&id=3muzEmi4dpD5&format=png&color=000000" alt="" />France</a></li>
                <li><a className="dropdown-item" href="#"><img src="https://img.icons8.com/?size=100&id=ly7tzANRt33n&format=png&color=000000" alt="" />Spain</a></li>
                <li><a className="dropdown-item" href="#"><img src="https://img.icons8.com/?size=100&id=cYRU7TBWwNVs&format=png&color=000000" alt="" />Canada</a></li>
                <li><a className="dropdown-item" href="#"><img src="https://img.icons8.com/?size=100&id=Ej50Oe3crXwF&format=png&color=000000" alt="" />China</a></li>
              </ul>
            </li>
            <form className="d-flex s-p" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" onChange={handelSearch} value={props.Search} aria-label="Search" />
              <Link className="btn btn-outline-success" type="submit" to={`/NewsMonkey/topic/${props.Search} `} onClick={() => { props.setKey(props.Search) }}>Search</Link>
            </form>
            <button className="navbar-toggler p-f" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 scrollable-nav" >

              <li className="nav-item">

                <Link className="nav-link " aria-current="page" to="/NewsMonkey">
                  <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                    Home
                  </span>
                </Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Business"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Business</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Entertainment"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Entertainment</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Health"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Health</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Science"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Science</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Sports"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Sports</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Technology"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Technology</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Education"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Education</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Crime"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Crime</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Politics"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Politics</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/NewsMonkey/Food"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">Food</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
