import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceProvider } from '../../providers/place/place';
import { Place } from'../../models/place';
import { PlaceDetailPage } from '../place-detail/place-detail';

/**
 * Generated class for the PlaceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-place-list',
  templateUrl: 'place-list.html',
})
export class PlaceListPage {
    places: Place[];
    
    name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private placeService : PlaceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceListPage');
       this.loadPlaces();
  }
    
 private loadPlaces() {
    
    this.placeService.getPlaces().subscribe(placesList => {
      
        this.places = placesList;
      
    });
  }
    
     private seeDetails (place: Place) {
    console.log("détails", place);
    this.navCtrl.push(PlaceDetailPage, {place: place});
  }
}
