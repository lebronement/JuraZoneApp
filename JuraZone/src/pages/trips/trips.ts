import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewtripsPage } from '../newtrips/newtrips';



/**
 * Generated class for the TripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
})
export class TripsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
  }

  goToCreateTrips() {
    this.navCtrl.push(NewtripsPage);
  }

}
