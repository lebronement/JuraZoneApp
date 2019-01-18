import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { config } from '../../app/config';

import { PlaceRequest } from '../../models/createplace';
import { Place } from '../../models/place';

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
     placeInfo: PlaceRequest;
    mapOptions: MapOptions;
    map:Map;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: HttpClient, public PlaceEvent: Events, private geolocation: Geolocation) {
       this.placeInfo = new PlaceRequest();
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then(position => {
      console.log(`User is at ${position.coords.latitude}, ${position.coords.longitude}`);
      const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tileLayerOptions = { maxZoom: 18 };
       
       
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
    
      createplace(){

    let placeUrl = config.apiUrl+"/places";
          console.log(this.placeInfo.coordinates)

    this.http.post<Place>(placeUrl, this.placeInfo, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDg5NDU4MzIuNjM4LCJzdWIiOiJmNTk2YWFmYy1jZDVjLTQ4N2YtOGUzOS1lMWM5YzY0ZTFmZGQiLCJpYXQiOjE1NDc3MzYyMzJ9.CSNZ1G103kn2oaDKHGlxc-hpLVSeEp8NWX8WIHAjJeA'
      }
    }).subscribe(createdPlace => {
      this.PlaceEvent.publish('newPlace', true);
      this.navCtrl.pop()})
    
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
