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
    return this.http.delete(deletePlaceUrl);
  }
    createPlace(placeInfo){
       let placeUrl = config.apiUrl+"/places"; 

    this.http.post<Place>(placeUrl, this.placeInfo).subscribe(createdPlace => {
      this.PlaceEvent.publish('newPlace', true);
      this.navCtrl.pop()})
    
    }
}