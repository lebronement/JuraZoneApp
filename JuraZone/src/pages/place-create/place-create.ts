import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { config } from '../../app/config';
import { NgForm } from "@angular/forms";

import { PlaceRequest } from '../../models/createplace';
import { Place } from '../../models/place';
import { Trip } from '../../models/trip';
import { PlaceProvider } from '../../providers/place/place';
import { TripProvider } from '../../providers/tripprovider';

import { TripsPage } from "../trips/trips";
import { PlacesPage } from "../places/places"

import { Geolocation } from '@ionic-native/geolocation';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { QimgImage } from '../../models/qimg-image';
import { PictureProvider } from '../../providers/picture/picture';

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
    trips: Trip[];
    
    @ViewChild(NgForm)
    form: NgForm;
    
    pictureData: string;
 picture: QimgImage;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: HttpClient, public PlaceEvent: Events, private geolocation: Geolocation, private placeService : PlaceProvider, private tripService : TripProvider, private camera: Camera, private pictureService: PictureProvider) {
       this.place = new PlaceRequest();
       this.place = {
      location: {
        coordinates: [0, 0],
        type: "Point"
        }
       }
       this.loadTrips(); 
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then(position => {
      console.log(`User is at ${position.coords.latitude}, ${position.coords.longitude}`);
      const tileLayerUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tileLayerOptions = { maxZoom: 18 };
       
       this.place.location={
           coordinates : [position.coords.latitude, position.coords.longitude],
           type: "Point"};
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
    
    loadTrips(){
        this.tripService.getTrips().subscribe(tripsList =>{
            this.trips = tripsList;
        }
       );
    }
    
      onSubmit($event) {

        console.log(this.place);
          this.trip=this.getTrip(this.place.tripId);
         // this.place.pictureHref=this.picture.url;

        // Prevent default HTML form behavior.
        $event.preventDefault();

        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }

        // Hide any previous login error.
        this.placeError = false;

        // Perform the authentication request to the API.
        this.placeService.createPlace(this.place).subscribe(tripPage => {
            this.trip.placesCount++;
            this.navCtrl.push(PlacesPage);
        }, err => {
            this.placeError = true;
            console.warn(`Creating Place failed: ${err.message}`);
            alert("Ce trip n'est pas le vôtre, vous ne pouvez y ajouter une place");
        });
    }

   PlacesPage() {
        this.navCtrl.push(PlacesPage, {}, { animate: false });
    }
    
    // La raison de ce code est que nous souhaitons que l'user puisser cliquer sur une map pour choisir où mettre sa place, mais nous avons dû simplifier
    
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
    
     takePicture() {
    this.pictureService.takeAndUploadPicture().subscribe(picture => {
      this.picture = picture;
    }, err => {
      console.warn('Could not take picture', err);
    });
  }
     getTrip(id): Observable<Trip> {
    return this.http
      .get<Trip>(config.apiUrl+'/trips/'+id);
  }

}
