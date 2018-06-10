import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shaktipeetam-items',
  templateUrl: './shaktipeetam-items.component.html',
  styleUrls: ['./shaktipeetam-items.component.css']
})
export class ShaktipeetamItemsComponent implements OnInit {

  constructor() { }

  data = [];

  ngOnInit() {
    let desc="According to the Hindu Culture,Engagement According to the Hindu Culture,Engagement";
    for (var i = 12; i <= 16; i++) {
      var item = {
        heading: "Engagement" + i,
        imagepath: "../assets/punyakshetra_images/" + i + '.jpg',
        imagepath1: "../assets/punyakshetra_images/" + i + 'A- Copy.jpg',
        bigdescription:desc,
        smalldesc: desc.substr(0, 30)
      };
      this.data.push(item);
    }
  }

}
