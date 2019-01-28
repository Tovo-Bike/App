import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';

import { AuthenService } from '@app/services/authen.service';
import { AccountService } from '@app/services/account.service';

@Component({
  selector: 'tovo-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile;
  uid;
  username;
  title;
  email_address;
  weight;
  gender;
  edit = false;
  image;
  title_equipped;

  titles;

  weights = [
    {value: '40', viewValue: '< 40 (kg)'},
    {value: '42', viewValue: '40~45 (kg)'},
    {value: '47', viewValue: '45~50 (kg)'},
    {value: '52', viewValue: '50~55 (kg)'},
    {value: '57', viewValue: '55~60 (kg)'},
    {value: '62', viewValue: '60~65 (kg)'},
    {value: '67', viewValue: '65~70 (kg)'},
    {value: '72', viewValue: '70~75 (kg)'},
    {value: '77', viewValue: '75~80 (kg)'},
    {value: '82', viewValue: '80~85 (kg)'},
    {value: '87', viewValue: '85~90 (kg)'},
    {value: '92', viewValue: '90~95 (kg)'},
    {value: '97', viewValue: '95~100 (kg)'},
    {value: '100', viewValue: '> 100 (kg)'}
  ];
  genders = [
    {value: 'F', viewValue: 'female'},
    {value: 'M', viewValue: 'male'}
  ];
  constructor(
    private authenService: AuthenService,
    private accountService: AccountService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.uid = this.authenService.currentUserValue.uid;
    this.accountService.getProfile(this.uid).subscribe(data => {
      this.profile = data;
      this.username = this.profile.name;
      this.email_address = this.profile.email;
      this.weight = this.profile.weight;
      this.image = this.profile.image;
      this.title_equipped = this.profile.title_equipped.name;
      this.titles = this.profile.titles_had;
      this.gender = this.profile.gender;
    });
  }
  onSubmit() {
    this.accountService.postProfile(this.uid, this.username, this.email_address, this.weight, this.gender)
    .subscribe(data => {
      this.messege('Save Success!');
    }, error => {
      this.messege('Save Fail!');
    }
    );
  }

  messege(msg) {
    this.snackBar.open(msg, 'alert', {
      duration: 5000,
    });
  }
}
