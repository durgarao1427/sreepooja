import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

  mySubObs = new Subject();

  Updateuservalid() {
    this.mySubObs.next();
  }

}
