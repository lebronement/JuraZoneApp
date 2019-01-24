import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../app/config';
import { Place } from'../../models/place';

import { Observable } from 'rxjs/Rx';

/*
  Generated class for the PlacePrivider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceProvider {

  constructor(public http: HttpClient) { 
  }

  getPlaces(): Observable<Place[]> {
    return this.http
      .get<Place[]>(config.apiUrl+'/places');
  }
    deletePlace(id: string): Observable<{}> {
    const deletePlaceUrl = `${config.apiUrl}/places/` + id;
    return this.http.delete(deletePlaceUrl, {
        headers:{
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDg5NDU4MzIuNjM4LCJzdWIiOiJmNTk2YWFmYy1jZDVjLTQ4N2YtOGUzOS1lMWM5YzY0ZTFmZGQiLCJpYXQiOjE1NDc3MzYyMzJ9.CSNZ1G103kn2oaDKHGlxc-hpLVSeEp8NWX8WIHAjJeA'
        }
    });
  }
    createPlace(placeInfo){
       let placeUrl = config.apiUrl+"/places"; 

    this.http.post<Place>(placeUrl, this.placeInfo, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDg5NDU4MzIuNjM4LCJzdWIiOiJmNTk2YWFmYy1jZDVjLTQ4N2YtOGUzOS1lMWM5YzY0ZTFmZGQiLCJpYXQiOjE1NDc3MzYyMzJ9.CSNZ1G103kn2oaDKHGlxc-hpLVSeEp8NWX8WIHAjJeA'
      }
    }).subscribe(createdPlace => {
      this.PlaceEvent.publish('newPlace', true);
      this.navCtrl.pop()})
    
    }
}