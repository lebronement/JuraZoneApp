import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewtripsPage } from '../newtrips/newtrips';
import { ArticletripsPage } from '../articletrips/articletrips';
import { Trip } from '../../models/Trip';



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

  /**trips: Trip[]; */

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
  }


  /**
   * ionViewDidEnter(){
   * appel http
   * 
   * 
   * 
   * }
   * 
   */


  goToCreateTrips() {
    this.navCtrl.push(NewtripsPage);
  }



  goToSeeTrips() {
    this.navCtrl.push(ArticletripsPage);
  }

}
