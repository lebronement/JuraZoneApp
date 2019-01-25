import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Trip } from '../../models/Trip';
import { TripProvider } from '../../providers/tripprovider';

/**
 * Generated class for the ModiftripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modiftrip',
  templateUrl: 'modiftrip.html',
})
export class ModiftripPage {

  trip: Trip;
  tripMod: Trip;

  constructor(public navCtrl: NavController, public navParams: NavParams, private TripService : TripProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModiftripPage');

    
  }

}
