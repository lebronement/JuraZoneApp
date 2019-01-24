import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlaceMapPage } from '../place-map/place-map';
import { PlaceListPage } from '../place-list/place-list';
 
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
   

     PlaceMap = this.PlaceMap;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    
   /*  showPlace() {
    this.navCtrl.push(PlacePage);
  }

  showTrip() {
    this.navCtrl.parent.select(0).then(() => {
      this.navCtrl.parent.getSelected().push(TripPage);
    });
  }

  showUser() {
    alert("todo: show user");
  }*/

}

