import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../app/config';
import { User } from'../models/user';

import { Observable } from 'rxjs/Rx';
import { AuthProvider } from './auth/auth';

/*
  Generated class for the PlacePrivider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient, private auth: AuthProvider) { 
  }

  getUsers(id: string): Observable<User[]> {
    return this.http
      .get<User>(config.apiUrl+'/users' + id);
  }
   deleteUser(id: string): Observable<{}> {
    const deleteUserUrl = (config.apiUrl+"/users/" + id);
       
    return this.http.delete(deleteUserUrl);
       this.auth.logOut();
  }
   // createPlace(placeInfo){
    //   let placeUrl = config.apiUrl+"/places"; 

  //  this.http.post<Place>(placeUrl, this.placeInfo).subscribe(createdPlace => {
   //   this.PlaceEvent.publish('newPlace', true);
    //  this.navCtrl.pop()})
    
   // }
}