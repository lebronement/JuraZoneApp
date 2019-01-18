import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { PlaceRequest } from '../../models/createplace';
import { Place } from '../../models/place';

/**
 * Generated class for the PlaceCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-place-create',
  templateUrl: 'place-create.html',
})
export class PlaceCreatePage {
     placeInfo: PlaceRequest;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: HttpClient, public PlaceEvent: Events) {
       this.placeInfo = new PlaceRequest();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceCreatePage');
  }
    
      createplace(){

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
