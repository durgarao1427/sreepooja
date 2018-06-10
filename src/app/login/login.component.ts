import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private abc:LoginserviceService, private router: Router,private http: HttpClient) { }
  ngOnInit() {}

  loginclick:boolean=false;
  login_errors:any ='';
  usernotfound:boolean=false;
  email;
  password;

  login(formData:NgForm){
    this.loginclick=true;
    if (formData.valid) {
      this.email = formData.value.email;
      this.password = formData.value.password;
      if (this.email && this.password) {
        this.http.post('http://localhost/angular/sreepooja/login.php', {'email':this.email,'password':this.password})
          .subscribe((res: any) => {
              if(res.error){
                this.usernotfound = true;
                this.login_errors = res.message;
              }else{
                localStorage.setItem("userdata",JSON.stringify(res.userdata));
                console.log(localStorage.getItem("userdata"));
                this.abc.Updateuservalid();
                this.router.navigate(['/', 'home']);
              }
            },
            err => {
              console.log(err);
            }
          );
      } else {
        this.loginclick=true;
      }
    }
  }
}

