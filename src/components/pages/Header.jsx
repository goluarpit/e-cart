import React,{Component} from "react";
import '../styles/Header.css';

export default class Header extends Component{
  render = () =>{
      return(
        <React.Fragment>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#logo">Shopping<b id="logo">Cart</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#gallery">Gallery</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link " href="#register"  aria-disabled="true">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#login">Login</a>
        </li>

      </ul>
      <form class="d-flex pe-5">
        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </React.Fragment>
      )
  }
}