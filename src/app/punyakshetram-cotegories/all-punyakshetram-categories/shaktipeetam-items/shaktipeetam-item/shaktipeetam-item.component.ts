import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-shaktipeetam-item',
  templateUrl: './shaktipeetam-item.component.html',
  styleUrls: ['./shaktipeetam-item.component.css']
})
export class ShaktipeetamItemComponent implements OnInit {

  constructor() { }
  @Input() item;
  ngOnInit() {
  }

}
