import React,{Component} from "react";


export default class Contact extends Component{
  render = () =>{
      return(
        <React.Fragment >
       
       <div class="container-fluid">       
<section class="m-0" style={{background:"#e8ead8"}}>

    
    <h2 class="h1-responsive font-weight-bold text-center my-0 pt-3">Contact <b class="text-danger">Us</b></h2>
    
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to <br/>you within
        a matter of hours to help you.</p>
        
    <div class="row pb-3" >


        <div class="col-md-1"></div>
        <div class="col-md-7 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form"  method="POST">

                
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="name" class="">Your name</label>
                            <input type="text" id="name" placeholder="Enter your Name..." name="name" class="form-control"/>
                            
                        </div>
                    </div>
                    

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" class="">Your email</label>
                            <input type="text" id="email" placeholder="Enter your Email..." name="email" class="form-control"/>
                           
                        </div>
                    </div>
                    

                </div>
                

                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                        <label for="subject" class="">Subject</label>
                            <input type="text" id="subject" placeholder="Enter your Subject..." name="subject" class="form-control"/>
                            
                        </div>
                    </div>
                </div>
                

                
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                        <label for="message">Your message</label>
                            <textarea type="text" id="message" placeholder="Enter your Message..." name="message" rows="2" class="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
                

            </form><br/>

            <div class="text-center text-md-left">
                <a href="#!" class="btn btn-danger">Send</a>
            </div>
            <div class="status"></div>
        </div>
        

        
        <div class="col-md-3 text-center pt-3">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Lakhimpur Kheri,262701, India</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 91 9984051205</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>arpitvermaak47@gmail.com</p>
                </li>
                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p></p>
                </li>
                
            </ul>
        </div>
        <div class="col-md-1"></div>
        

    </div>

</section>
    </div>


        </React.Fragment>
      )
  }
}