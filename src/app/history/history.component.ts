import { Component, OnInit } from '@angular/core';

import { AccountService } from '@app/services/account.service';
import { AuthenService } from '@app/services/authen.service';
import { RateComponent } from '@app/rate/rate.component';

import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'tovo-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  uid;
  history ;
  constructor(
    private authenService: AuthenService,
    private accountService: AccountService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.uid = this.authenService.currentUserValue.uid;
    this.accountService.getHistory(this.uid)
    .subscribe(
      data => {
        this.history = data;
        this.history.sort((a, b) => {
          if (a.start_time < b.start_time) { return 1; }
          if (a.start_time > b.start_time) { return -1; }
          return 0;
        });
      },
      error => {console.log(error); }
    );
  }


  rate(item) {
    const dialogRef = this.dialog.open(RateComponent, {
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(x => {
      if (x >= 1 && x <= 5) {
        this.accountService.rate(this.uid, item.tid, x)
        .subscribe(data => {
          this.messege('Rate Sucess');
          this.ngOnInit();
        }, error => {
          this.messege('Rate Fail');
        }
        );
      }
    });
  }
  messege(msg) {
    this.snackBar.open(msg, 'alert', {
      duration: 5000,
    });
  }

}
