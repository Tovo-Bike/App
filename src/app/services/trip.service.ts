import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(
    private http: HttpClient
  ) { }

  tripGo( uid: number, slon: number, slat: number, elon: number, elat: number): Observable<any> {
    return this.http.post<any>(environment.tripGoUrl, {uid, slon, slat, elon, elat});
  }

  getTrip(): Observable<any> {
    return this.http.get<any>(environment.tripUrl);
  }

  acceptTrip(uid: number, tid: number): Observable<any> {
    return this.http.post<any>(environment.tripAcceptUrl, {uid, tid});
  }

  startTrip(tid: number): Observable<any> {
    return this.http.post<any>(environment.tripStartUrl, {tid});
  }
  endTrip(tid: number): Observable<any> {
    return this.http.post<any>(environment.tripEndUrl, {tid});
  }

}
