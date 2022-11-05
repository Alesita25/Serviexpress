import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor(private camera: Camera) { }

  takePicture(){
    const options: CameraOptions ={
      quality:100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

    },(err) => {
      console.log("Camera issue :" + err);
    });
  }
}
  
