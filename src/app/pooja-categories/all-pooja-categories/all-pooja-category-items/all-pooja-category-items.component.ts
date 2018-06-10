import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-pooja-category-items',
  templateUrl: './all-pooja-category-items.component.html',
  styleUrls: ['./all-pooja-category-items.component.css']
})
export class AllPoojaCategoryItemsComponent implements OnInit {

  constructor(private router: ActivatedRoute,private http: HttpClient) { }
    // let desc = "According to the Hindu Culture,Engagement According to the Hindu Culture,Engagement";
    // for (var i = 2; i <= 9; i++) {
    //   var item = {
    //     heading: "Engagement" + i,
    //     imagepath: "../assets/images/" + i + '.jpg',
    //     imagepath1: "../assets/images/" + i + 'A- Copy.jpg',
    //     bigdescription: desc,
    //     smalldesc: desc.substr(0, 30)
    //   };
    //   this.data.push(item);
    // }
  

  categories = ["Festival Poojas","Life steps Poojas","Ocational Poojas","Special Poojas"];
  data = [];
  pooja_category = "All Poojas";
  ngOnInit() {

    var category_id = 0;
    this.router.params.subscribe((data) => {
      category_id = data.category;
    });
    this.pooja_category = this.categories[category_id-1];
    this.http.post('http://localhost/angular/sreepooja/poojas_with_catgory.php', {'category_id':category_id})
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
