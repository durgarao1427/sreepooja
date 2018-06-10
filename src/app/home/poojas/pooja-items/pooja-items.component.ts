import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pooja-items',
  templateUrl: './pooja-items.component.html',
  styleUrls: ['./pooja-items.component.css']
})
export class PoojaItemsComponent implements OnInit {

  constructor(private http: HttpClient) { }

 // data = [];
  // ngOnInit() {
  //   let desc="According to the Hindu Culture,Engagement According to the Hindu Culture,Engagement";
  //   for (var i = 0; i <= 11; i++) {
  //     var item = {
  //       heading: "Engagement" + i,
  //       imagepath: "../assets/images/" + i + '.jpg',
  //       imagepath1: "../assets/images/" + i + 'A- Copy.jpg',
  //       bigdescription:desc,
  //       smalldesc: desc.substr(0, 50),
  //       id:i
  //     };
  //     this.data.push(item);
  //   }
  // }
  //data =["all"];
  data = [];
  ngOnInit() {
    this.http.post('http://localhost/angular/sreepooja/poojas.php', {})
      .subscribe(
      (res: any) => {
        console.log(res);
        for (var i =1; i <=8; i++) {
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