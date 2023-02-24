import React,{Component} from "react";
import Header from './components/pages/Header';
import Theader from './components/pages/Theader';
import Footer from './components/pages/Footer';
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/gallery";
import Register from "./components/pages/Register";
import { route } from "./Router";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

    

export default class App extends Component{

  view ={
      login : <Login/>,
      home : <Home/>,
      gallery : <Gallery/>,
      register : <Register/>,
      contact : <Contact/>,
      about : <About/>
  }

  render = () =>{
      return(
        <React.Fragment>
          <Theader/>
      <Header/>
      {this.renderViews()}
      <Footer/>
        </React.Fragment>
      )
  }

  renderViews = () => {
    return this.view[route];
  }
}