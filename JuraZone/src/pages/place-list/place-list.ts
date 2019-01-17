import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceProvider } from '../../providers/place/place';
import { Place } from'../../models/place';

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
       this.loadIssues();
  }
    
 private loadIssues() {
    
    this.placeService.getPlaces().subscribe(placesList => {
      
        this.places = placesList;
      
    });
  }
}
