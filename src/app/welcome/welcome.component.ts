import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../common/global/global.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: any;
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.userData.subscribe((data) => {
      this.user = data;
    });
  }

}
