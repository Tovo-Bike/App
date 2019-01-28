import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  getTitles(): Observable<any> {
    return this.http.get(environment.titlesUrl);
  }
  getTakerRank(): Observable<any> {
    return this.http.get(environment.rankTakerUrl);
  }
  getRiderRank(): Observable<any> {
    return this.http.get(environment.rankRiderUrl);
  }
  getProfile(uid: number): Observable<any> {
    return this.http.post<any>(environment.profileUrl, {uid});
  }
  postProfile(uid: number, name: string, email: string, weight: number, gender: string): Observable<any> {
    return this.http.post<any>(environment.updateUrl, {uid, name, email, weight, gender});
  }

  getHistory(uid: number): Observable<any> {
    return this.http.post<any>(environment.hisUrl, {uid});
  }

  rate(uid: number, tid: number, point: number): Observable<any> {
    return this.http.post<any>(environment.rateUrl, {uid, tid, point});
  }

  equipTitle(uid: number, ttid: number) {
    return this.http.post<any>(environment.equipUrl, {uid, ttid});
  }


  buyTitle(uid: number, ttid: number) {
    return this.http.post<any>(environment.buyTitleUrl, {uid, ttid});
  }

}
