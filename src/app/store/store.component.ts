import { Component, OnInit } from '@angular/core';

import { AccountService } from '@app/services/account.service';
import { AuthenService } from '@app/services/authen.service';

import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'tovo-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  driverTitles;
  takerTitles;
  titles_had;
  current;
  constructor(
    private accountService: AccountService,
    private authService: AuthenService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.accountService.getTitles()
    .subscribe(data => {
      this.driverTitles = data.filter(x => x.job === 'Taker');
      this.takerTitles = data.filter(x => x.job === 'Rider');
      this.check();
    });
    const uid = this.authService.currentUserValue.uid;
    this.accountService.getProfile(uid)
    .subscribe(data => {
      this.titles_had = data.titles_had;
      this.current = data.title_equipped;
      this.check();
    });
  }

  check() {
    if (this.titles_had === undefined) { return; }
    if ( this.driverTitles !== undefined ) {
      this.driverTitles.forEach(element => {
        if ( this.titles_had.findIndex(value => value.ttid === element.ttid) !== -1 ) {
          element['check'] = 1;
        } else {
          element['check'] = 0;
        }
      });
    }
    if ( this.takerTitles !== undefined ) {
      this.takerTitles.forEach(element => {
        if ( this.titles_had.findIndex(value => value.ttid === element.ttid) !== -1 ) {
          element['check'] = 1;
        } else {
          element['check'] = 0;
        }
      });
    }
    let index = this.driverTitles.findIndex(x => x.ttid === this.current.ttid) ;
    if (index !== -1) {
      this.driverTitles[index]['check'] = 2;
    }
    index = this.takerTitles.findIndex(x => x.ttid === this.current.ttid) ;
    if (index !== -1) {
      this.takerTitles[index]['check'] = 2;
    }
  }

  buy(item) {
    const uid = this.authService.currentUserValue.uid;
    this.accountService.buyTitle(uid, item.ttid)
    .subscribe(
      data => {
        this.messege('Purchase Success!');
        this.getData();
      },
      error => {
        this.messege('Purchase Fail!');
      },
    );
  }
  equip(item) {
    const uid = this.authService.currentUserValue.uid;
    this.accountService.equipTitle(uid, item.ttid)
    .subscribe(
      data => {
        this.messege('Equip Success!');
        this.getData();
      },
      error => {
        this.messege('Equip Fail!');
      },
    );
  }

  messege(msg) {
    this.snackBar.open(msg, 'alert', {
      duration: 5000,
    });
  }

}
