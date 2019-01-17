import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceMapPage } from '../place-map/place-map';

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
     PlaceMap = PlaceMap;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

}
