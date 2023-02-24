import React,{Component} from "react";

export default class Footer extends Component{
  render = () =>{
      return(
        <React.Fragment>
        
<footer className="text-center text-white" style={{background:"#2e3637"}}>

  <div className="container p-4">
  
    <section className="mb-4">
    
      <a className="btn btn-danger btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

    
      <a className="btn btn-danger btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

    
      <a className="btn btn-danger btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

    
      <a className="btn btn-danger btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

    
      <a className="btn btn-danger btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

    
      <a className="btn btn-danger btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
  

  
    <section className="">
      <form action="">
      
        <div className="row d-flex justify-content-center">
        
          <div className="col-auto">
            <p className="pt-2">
              <strong><b style={{color:'aqua'}}>Sign up</b></strong>
            </p>
          </div>
        

        
          <div className="col-md-5 col-12">
          
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" /><br/>
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
        

        
          <div className="col-auto">
          
            <button type="submit" className="btn btn-danger mb-4">
              Subscribe
            </button>
          </div>
        
        </div>
      
      </form>
    </section>
  

  
    <section className="mb-4">
      <p>
       This is shopping cart website where you can purchase item at a very low components<br/>
       easily provide dicount upto 25%<br/>
       Cod available<br/>
       delivery available all over india with some charges
      </p>
    </section>
  

  
    <section className="">
    
      <div className="row">
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase"><a href="https://www.instagram.com/golu__arpit/" style={{color:'aqua',textDecoration:'none'}}>Instgram</a></h5>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase"><a href="https://www.facebook.com/profile.php?id=100016621933637" style={{color:'red',textDecoration:'none'}}>facebook</a></h5>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase"><a href="https://github.com/goluarpit" style={{color:'purple',textDecoration:'none'}}>Github</a></h5>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase"><a href="linkedin.com/in/arpit-golu-verma" style={{color:'blue',textDecoration:'none'}}>linked In</a></h5> 
        </div>
      </div>
    </section>
  </div>
  <div class="text-center p-3" style={{backgroundColor: "black"}}>
    © 2020 Copyright : 
    <a class="text-danger fw-bold text-decoration-none" href="https://mdbootstrap.com/"> Arpit Verma</a>
  </div>

</footer>
        </React.Fragment>
      )
  }
}