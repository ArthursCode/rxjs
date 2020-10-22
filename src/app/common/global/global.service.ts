import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userData: any;

  constructor() {
    this.userData = new BehaviorSubject({});
  }

  setUserData(data) {
    this.userData.next(data);
  }
}
