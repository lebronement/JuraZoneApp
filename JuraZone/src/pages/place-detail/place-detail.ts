import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Place } from'../../models/place';

import { Geolocation } from '@ionic-native/geolocation';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';
import { PlaceProvider } from '../../providers/place/place';

import { PlaceUpdatePage } from '../place-update/place-update';

import { PlacesPage } from '../places/places';
/**
 * Generated class for the PlaceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetailPage {
    
    place: Place;
    
    mapOptions: MapOptions;
    mapMarkers: Marker[];
    map: Map;
    placeList: Place[];
    
    

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, public alertCtrl: AlertController, private placeService : PlaceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceDetailPage');
      console.log(this.navParams);
       this.place = this.navParams.get('place');
      console.log(this.place.location);
      
      this.geolocation.getCurrentPosition().then(position => {
      console.log(`User is at ${position.coords.latitude}, ${position.coords.longitude}`);
      const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tileLayerOptions = { maxZoom: 18 };
        this.mapMarkers = [
          marker(this.place.location.coordinates),
            marker([position.coords.latitude, position.coords.longitude]).bindTooltip('TU ES LA')
        ];
      this.mapOptions = {
        layers: [
          tileLayer(tileLayerUrl, tileLayerOptions)
        ],
        zoom: 15,
        center: latLng(this.place.location.coordinates)
      };
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }
    
  onMapReady(map: Map) {
    this.map = map;
      this.map.on('moveend', () => {
      const center = this.map.getCenter();
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });
  }
    private updatePlace (place: Place) {
    console.log("update", place);
    this.navCtrl.push(PlaceUpdatePage, {place: place});
  }
   deletePlace() {
        const confirm = this.alertCtrl.create({
            title: 'Delete Place?',
            message: 'Voulez-vous vraiment supprimer cette place?',
            buttons: [
                {
                    text: 'Oui',
                    handler: () => {
                        this.placeService.deletePlace(this.place.id).subscribe();
                        this.navCtrl.setRoot(PlacesPage, { opentab: 1 });
                        this.placeService.getPlaces().subscribe(placeList => {
                            this.placeList = placeList;

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
    
}


