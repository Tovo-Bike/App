import { Component, OnInit } from '@angular/core';
import { AuthenService } from '@app/services/authen.service';
import { AccountService } from '@app/services/account.service';

@Component({
  selector: 'tovo-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  profile;
  gear;
  rose;
  uid;

  constructor(
    private authenService: AuthenService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.uid = this.authenService.currentUserValue.uid;
    this.accountService.getProfile(this.uid).subscribe(data => {
      this.profile = data;
      this.gear = this.profile.gear;
      this.rose = this.profile.rose;
    });
  }
}