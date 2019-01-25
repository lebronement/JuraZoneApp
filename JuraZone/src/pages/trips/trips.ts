import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewtripsPage } from '../newtrips/newtrips';
import { ArticletripsPage } from '../articletrips/articletrips';
import { Trip } from '../../models/Trip';
import { TripProvider } from '../../providers/tripprovider';
import { AuthProvider } from '../../providers/auth/auth';



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



  trips: Trip[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private tripService: TripProvider, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
    this.loadTrips();
  }

  private loadTrips(){

    this.tripService.getTrips().subscribe(tripslist => {this.trips=tripslist});

  console.log(this.trips);


  }
    logOut() {
    this.auth.logOut();
  }
    
    


  

  goToCreateTrips() {
    this.navCtrl.push(NewtripsPage);
  }



  goToSeeTrips(trip : Trip) {
    this.navCtrl.push(ArticletripsPage, {trip : trip});
  }

}