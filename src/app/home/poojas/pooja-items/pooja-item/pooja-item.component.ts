import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
//import { Router,ActivatedRoute} from '@angular/router';
//import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
//import { ModuleWithProviders } from '@angular/core';
@Component({
  selector: 'app-pooja-item',
  templateUrl: './pooja-item.component.html',
  styleUrls: ['./pooja-item.component.css']
})
export class PoojaItemComponent implements OnInit {

  constructor( private router: Router) { }

  @Input() item;

  ngOnInit() {
  }

  getpoojadetails(poojaid){
   // console.log("hiii");
    this.router.navigate(['/poojadetails'+'/'+poojaid]);
  }

  booknow(bookingid){
    //console.log("hiii");
    this.router.navigate(['/booknow'+'/'+bookingid]);
  }
}
