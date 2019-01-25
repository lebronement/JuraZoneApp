import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../app/config';
import { Trip } from'../models/Trip';

import { Observable } from 'rxjs/Rx';

/*
  Generated class for the PlacePrivider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TripProvider {

  constructor(public http: HttpClient) { 
  }

  getTrips(): Observable<Trip[]> {
    return this.http
      .get<Trip[]>(config.apiUrl+'/trips');
  }
   deleteTrip(id: string): Observable<{}> {
   const deleteTripsUrl = (config.apiUrl+'/trips/'+id);
   return this.http.delete(deleteTripsUrl);
  }



    
  }

