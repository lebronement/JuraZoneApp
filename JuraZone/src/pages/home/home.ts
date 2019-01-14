import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { QimgImage } from '../../models/qimg-image';
import { PictureProvider } from '../../providers/picture/picture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
    pictureData: string;
 picture: QimgImage;

  constructor(public navCtrl: NavController, private camera: Camera, private pictureService: PictureProvider) {
      
      
     
  }

   takePicture() {
    this.pictureService.takeAndUploadPicture().subscribe(picture => {
      this.picture = picture;
    }, err => {
      console.warn('Could not take picture', err);
    });
  }
     /*
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(pictureData => {
      this.pictureData = pictureData;
    }).catch(err => {
      console.warn(Could not take picture because: ${err.message});
    });
    */
  

}
