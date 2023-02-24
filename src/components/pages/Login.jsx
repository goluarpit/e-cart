import React,{Component} from "react";


export default class Login extends Component{
  render = () =>{
      return(
        <React.Fragment>
          <div className="container">
          <div class="row mt-4">
          <div class="col-sm-6">
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link text-bg-danger" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>



<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div class="text-center mb-3">
        <p class="fw-bold fs-2">Sign <b class="text-danger">In</b></p>
      </div>


      
      <div class="form-outline mb-2">
      <label class="form-label" for="loginName">Email or username</label>
        <input type="email" id="loginName" placeholder="Enter your Username or Email..." class="form-control" />
       
      </div>

      
      <div class="form-outline mb-4">
      <label class="form-label" for="loginPassword">Password</label>
        <input type="password" id="loginPassword" placeholder="Enter your Password..." class="form-control" />
        
      </div>

      
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck"  />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          
          <a href="#!" class="text-danger text-decoration-none">Forgot password?</a>
        </div>
      </div>

      <div class="text-center">
      <button type="submit" class="btn btn-danger w-25  btn-block mb-4">Sign In</button>

      
      
        <p>Not a member? <a href="#register">Register</a></p>
      </div>
    </form>
  </div>
</div>
</div>
<div class="col-sm-6 mt-5">


<img src="./images/b.jpg" class="img-fluid" alt="Sample image"/>

</div>
</div>
</div>

        </React.Fragment>
      )
  }
}