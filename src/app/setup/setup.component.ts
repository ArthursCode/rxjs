import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {GlobalService} from '../common/global/global.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  setupForm: any;
  constructor(private fb: FormBuilder, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.userData.subscribe((data) => {
      this.initSetupForm(data);
    });
  }

  initSetupForm(data) {
    this.setupForm = this.fb.group({
      first_name: [data ? data.first_name : '', Validators.required],
      last_name: [data ? data.last_name : '', Validators.required],
      age: [data ? data.age : 0, Validators.required]
    });
  }

  setup() {
    this.globalService.setUserData(this.setupForm.value);
  }

}
