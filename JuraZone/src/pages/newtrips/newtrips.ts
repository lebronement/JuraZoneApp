import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { TripsPage } from '../trips/trips';
import { HttpClient } from '@angular/common/http';
import { TripRequest } from '../../models/createtrip';
import { Trip } from '../../models/Trip';
import { ArticletripsPage } from '../articletrips/articletrips';



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

  tripInfo: TripRequest;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public TripEvent: Events) {
   this.tripInfo = new TripRequest();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtripsPage');
  }

  goToreturntrips() {
    this.navCtrl.push(TripsPage);
  }
 
  createtrip(){

    let tripUrl = "https://comem-appmob-2018-2019-c.herokuapp.com/api/trips";

    this.http.post<Trip>(tripUrl, this.tripInfo).subscribe(createdTrip => {
      this.TripEvent.publish('newTrip', true);
      this.navCtrl.pop()})
    
    }

  
}
  