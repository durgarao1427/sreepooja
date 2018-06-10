import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-pooja-category-item',
  templateUrl: './all-pooja-category-item.component.html',
  styleUrls: ['./all-pooja-category-item.component.css']
})
export class AllPoojaCategoryItemComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() item;
  ngOnInit(){
    
  }
  getpoojadetails(poojaid){
    this.router.navigate(['/poojadetails'+'/'+poojaid]);
  }
  booknow(bookingid){
    //console.log("hiii");
    this.router.navigate(['/booknow'+'/'+bookingid]);
  }
}
