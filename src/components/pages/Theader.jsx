import React,{Component} from "react";
import '../styles/Theader.css';

export default class Theader extends Component{
  render = () =>{
      return(
        <React.Fragment>
          <div className="container-fluid">
            <div className="row theader text-bg-dark">
                <div className="col-sm-4">+91 9984051205 </div>
                <div className="col-sm-4">arpitvermaak47@gmail.com</div>
                <div className="col-sm-4">Arpit Verma</div>
            </div>
          </div>
        </React.Fragment>
      )
  }
}