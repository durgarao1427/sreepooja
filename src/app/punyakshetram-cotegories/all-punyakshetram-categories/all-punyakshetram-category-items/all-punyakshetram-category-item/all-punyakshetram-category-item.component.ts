import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-all-punyakshetram-category-item',
  templateUrl: './all-punyakshetram-category-item.component.html',
  styleUrls: ['./all-punyakshetram-category-item.component.css']
})
export class AllPunyakshetramCategoryItemComponent implements OnInit {

  constructor() { }
  @Input() item;
  ngOnInit() {
  }

}
