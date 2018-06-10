import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {

  isuservalid:boolean=false;
  //login by using localstorage
  userName:any = '';
  constructor(private abc:LoginserviceService) { 
    console.log(localStorage.getItem("userdata"));
    if(localStorage.getItem("userdata")){
      let userdata = JSON.parse(localStorage.getItem("userdata"));
      this.userName = userdata['fullName'];
    }
  }
 
  ngOnInit() {
    this.abc.mySubObs.subscribe(() => {
      console.log("This method has been called");
      this.isuservalid = true;
     
    });
  
  }
  logout(){
  this.abc.Updateuservalid();
  this.isuservalid=false;
    localStorage.clear();
}

}
