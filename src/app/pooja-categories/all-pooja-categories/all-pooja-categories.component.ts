import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-all-pooja-categories',
  templateUrl: './all-pooja-categories.component.html',
  styleUrls: ['./all-pooja-categories.component.css']
})
export class AllPoojaCategoriesComponent implements OnInit {

  constructor() { }
  @Input() item;
  ngOnInit(){

  }
}
