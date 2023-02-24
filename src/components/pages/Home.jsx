import React,{Component} from "react";


export default class Home extends Component{
  render = () =>{
      return(
        <React.Fragment>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item ">
      <img src="./images/a.jpg" height={"700px"} class="d-block w-100  hover-overlay" alt="path errer"/>
    </div>
    <div class="carousel-item active">
      <img src="./images/b.jpg" height={"700px"} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./images/e.png" height={"700px"} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

        </React.Fragment>
      )
  }
}