import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/services/account.service';

@Component({
  selector: 'tovo-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  riderInfo;
  takerInfo;
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountService.getTakerRank()
    .subscribe(data => {
      console.log(data);
      this.takerInfo = data;
    });
    this.accountService.getRiderRank()
    .subscribe(data => {
      this.riderInfo = data;
    });
  }

}
