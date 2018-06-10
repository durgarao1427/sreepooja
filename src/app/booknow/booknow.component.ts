import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  booked:boolean=false;
  bookingdata:boolean=false;
  booking(formData: NgForm) {
this.bookingdata=true;

let params = {
  name:formData.value.name,
  email:formData.value.email,
  phone:formData.value.phone,
  date:formData.value.date,
  address1:formData.value.address1,
  address2:formData.value.address2,
  pincode:formData.value.pincode,
 
}
this.http.post('http://localhost/angular/sreepooja/registration.php', params)
.subscribe((res: any) => {
    
    if(res.error){
      this.booked = false;
    
    }else{
      this.booked= true;
    }
  },
  err => {
    console.log(err);
  }
);
  }

}
