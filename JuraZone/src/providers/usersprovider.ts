import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../app/config';
import { User } from'../models/user';

import { Observable } from 'rxjs/Rx';

/*
  Generated class for the PlacePrivider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient) { 
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(config.apiUrl+'/users');
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