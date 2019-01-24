import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TripsPage } from '../trips/trips';


/**
 * Generated class for the NewtripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-newtrips',
  templateUrl: 'newtrips.html',
})
export class NewtripsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtripsPage');
  }

  goToreturntrips() {
    this.navCtrl.push(TripsPage);
  }
 

}
