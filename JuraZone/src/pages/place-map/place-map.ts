import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';

import { PlaceProvider } from '../../providers/place/place';
import { Place } from'../../models/place';

/**
 * Generated class for the PlaceMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-place-map',
  templateUrl: 'place-map.html',
})
export class PlaceMapPage {
     mapOptions: MapOptions;
    mapMarkers: [];
    
    map: Map;
    places: Place[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private placeService : PlaceProvider ) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then(position => {
      console.log(`User is at ${position.coords.latitude}, ${position.coords.longitude}`);
      const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tileLayerOptions = { maxZoom: 18 };
       this.placeService.getPlaces().subscribe(places => {
      this.places = places;
        console.log(this.mapMarkers);
           this.mapMarkers = new Array();
      places.forEach((place) => {
        this.mapMarkers.push(marker(place.location.coordinates).bindTooltip(place.name));
      });
    });
      this.mapOptions = {
        layers: [
          tileLayer(tileLayerUrl, tileLayerOptions)
        ],
        zoom: 15,
        center: latLng(position.coords.latitude, position.coords.longitude)
      };
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    });
  }
     private loadPlaces() {
    
  }
    
  onMapReady(map: Map) {
    this.map = map;
      this.map.on('moveend', () => {
      const center = this.map.getCenter();
      console.log(`Map moved to ${center.lng}, ${center.lat}`);
    });
  }
    

}
