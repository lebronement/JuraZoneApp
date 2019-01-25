import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Trip } from '../../models/Trip';
import { TripsPage } from '../../pages/trips/trips';
import { TripProvider } from '../../providers/tripprovider';
import { ModiftripPage } from '../modiftrip/modiftrip';
/**
 * Generated class for the ArticletripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-articletrips',
  templateUrl: 'articletrips.html',
})
export class ArticletripsPage {

  trip: Trip;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private TripService : TripProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticletripsPage');

    console.log(this.navParams);

    this.trip = this.navParams.get("trip");
  }

  deleteTrip() {
    const confirm = this.alertCtrl.create({
        title: 'Delete Trip?',
        message: 'Voulez-vous vraiment supprimer ce trip?',
        buttons: [
            {
                text: 'Oui',
                handler: () => {
                    this.TripService.deleteTrip(this.trip.id).subscribe();
                    this.navCtrl.setRoot(TripsPage, { opentab: 1 });
                    this.TripService.getTrips().subscribe(tripList => {
                        this.tripList = tripList;

                    });
                    console.log('Do you want to delete this place? - Yes clicked');
                }
            },
            {
                text: 'Non',
                handler: () => {
                    console.log('Do you want to delete this place? - No clicked');
                }
            }
        ]
    });
    confirm.present();

   
}

goTomodifTrips() {
  this.navCtrl.push(ModiftripPage);
}


}
