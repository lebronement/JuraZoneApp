import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceMapPage } from '../place-map/place-map';
import { PlaceListPage } from '../place-list/place-list';
import { PlaceCreatePage } from '../place-create/place-create';
import { AuthProvider } from '../../providers/auth/auth';
 
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



  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

 ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    
    goToMap() {
    this.navCtrl.push(PlaceMapPage);
  }
    goToList() {
    this.navCtrl.push(PlaceListPage);
  }
    goToAdd() {
    this.navCtrl.push(PlaceCreatePage);
  }
    logOut() {
    this.auth.logOut();
  }
    
    
    
   

}

