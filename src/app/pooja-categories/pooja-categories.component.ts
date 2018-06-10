import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pooja-categories',
  templateUrl: './pooja-categories.component.html',
  styleUrls: ['./pooja-categories.component.css']
})
export class PoojaCategoriesComponent implements OnInit {

 
  constructor(private http: HttpClient) { }
  data = [];
  ngOnInit() {
    this.http.post('http://localhost/angular/sreepooja/allpoojas.php', {})
      .subscribe(
      (res: any) => {
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          var item = {
            heading: res[i]['poojaName'],
            imagepath: "../assets/images/" + res[i]['imagePath'],
            bigdescription: res[i]['description'],
            smalldesc: res[i]['description'].substr(0, 50),
            id: res[i]['recId']
          };
          this.data.push(item);
        }
      },
      err => {
        console.log("Error occured");
      }
      );

  }

}
