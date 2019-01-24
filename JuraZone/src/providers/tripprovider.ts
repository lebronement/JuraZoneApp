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
  //  deletePlace(id: string): Observable<{}> {
  //  const deletePlaceUrl = ${config.apiUrl}/places/ + id;
  //  return this.http.delete(deletePlaceUrl);
  //}
   // createPlace(placeInfo){
    //   let placeUrl = config.apiUrl+"/places"; 

  //  this.http.post<Place>(placeUrl, this.placeInfo).subscribe(createdPlace => {
   //   this.PlaceEvent.publish('newPlace', true);
    //  this.navCtrl.pop()})
    
   // }
}