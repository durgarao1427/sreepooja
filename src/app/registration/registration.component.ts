import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  ngOnInit() {

  }
//passwordmatching:boolean=false;
  registerclick: boolean = false;
  passwordmatching:boolean=false;
  registration_errors:any = '';
  registered:boolean=false;
  register(formData: NgForm) {
    this.registerclick = true;
    let params = {
      name:formData.value.name,
      email:formData.value.email,
      password:formData.value.password,
      cpassword:formData.value.cpassword
    }
    if (formData.value.password !== formData.value.cpassword) {
      this.passwordmatching=true;
      return false;
    } else {
      this.passwordmatching=false;
    }
    
    this.http.post('http://localhost/angular/sreepooja/registration.php', params)
      .subscribe((res: any) => {
          this.registerclick = true;
          if(res.error){
            this.registered = false;
            this.registration_errors = res.message;
          }else{
            this.registered= true;
          }
        },
        err => {
          console.log(err);
        }
      );
  }

}
