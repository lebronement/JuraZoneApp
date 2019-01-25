import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { config } from '../../app/config';
import { NgForm } from "@angular/forms";

import { PlaceRequest } from '../../models/createplace';
import { Place } from '../../models/place';
import { PlaceProvider } from '../../providers/place/place';

import { Geolocation } from '@ionic-native/geolocation';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';

/**
 * Generated class for the PlaceCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-place-create',
  templateUrl: 'place-create.html',
})
export class PlaceCreatePage {
    mapOptions: MapOptions;
    map:Map;
    
     place: PlaceRequest;
    trip: Trip;
    lat: any;
    lng: any;
    location: Coordinates;
    coordinates: number[];
    placeError:boolean;
    
    @ViewChild(NgForm)
    form: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: HttpClient, public PlaceEvent: Events, private geolocation: Geolocation, private placeService : PlaceProvider) {
       this.placeInfo = new PlaceRequest();
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then(position => {
      console.log(`User is at ${position.coords.latitude}, ${position.coords.longitude}`);
      const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tileLayerOptions = { maxZoom: 18 };
       
       this.placeInfo.location=position.coords;
        this.placeInfo.tripId="be2b9fba-07cd-4326-a37b-17af0b6986c1";
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
    
       onSubmit($event) {

        console.log(this.place);

        // Prevent default HTML form behavior.
        $event.preventDefault();

        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }

        // Hide any previous login error.
        this.placeError = false;

        // Perform the authentication request to the API.
        this.placeService.createPlace(this.place).subscribe(place => {
            this.place.location.type = "Point";
            this.geolocation.getCurrentPosition().then(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                console.log("hallo:" + this.lat, this.lng);
                this.place.location.coordinates = ([this.lng, this.lat]);
                //this.place.location.coordinates[0] = +position.coords.longitude;
                //this.place.location.coordinates[1] = +position.coords.latitude;
            })   
        } , err => {
            this.placeError = true;
            console.warn(`Creating Place failed: ${err.message}`);
        });
    }
    
     onMapReady(map: Map) {
    this.map = map;
      this.map.on('click', function(e){
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
          this.placeInfo.coordinates = [lat, lng];
  });
  }

}
