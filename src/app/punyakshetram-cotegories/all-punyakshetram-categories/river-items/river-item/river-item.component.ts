import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-river-item',
  templateUrl: './river-item.component.html',
  styleUrls: ['./river-item.component.css']
})
export class RiverItemComponent implements OnInit {

  constructor() { }
  @Input() item;
  ngOnInit() {
  }

}
