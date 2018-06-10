import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-punyakshetra-item',
  templateUrl: './punyakshetra-item.component.html',
  styleUrls: ['./punyakshetra-item.component.css']
})
export class PunyakshetraItemComponent implements OnInit {

  constructor() { }
  @Input() item;
  ngOnInit() {
  }

}
