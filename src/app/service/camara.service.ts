import { Injectable } from '@angular/core';
// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import {Filesystem, Directory } from '@capacitor/filesystem';
// import {Storage} from '@capacitor/storage'; 
import {Foto} from '../models/foto.interface';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {
//Arreglo para almacenar fotos
public fotos: Foto[] = [];
  constructor() { }

  public async addNewGallery()
  {
    //Para tomar fotos
  const fotoCapturada = await Camera.getPhoto({
	resultType: CameraResultType.Uri,
	source: CameraSource.Camera,
	quality:100
  
  })
  this.fotos.unshift({
    filepath: 'foto_',
    webviewPath: fotoCapturada.webPath
  })

  }

//   takePicture(){
//     const options: CameraOptions ={
//       quality:100,
//       destinationType: this.camera.DestinationType.FILE_URI,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE
    
//     }
//     this.camera.getPicture(options).then((imageData) => {
//     let base64Image = 'data:image/jpeg;base64,' + imageData;
//     },(err) => {
//       console.log("Camera issue :" + err);
//     });
    
//   }
// }
  
}
