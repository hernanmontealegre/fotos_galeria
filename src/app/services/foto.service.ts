import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import {FilesystemPlugin, Filesystem, Directory} from '@capacitor/filesystem';
import {StoragePlugin, Storage} from '@capacitor/storage';
import { camera } from 'ionicons/icons';
import {Foto_interface} from '../models/foto.interface'

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  public foto_tomada: Foto_interface[]=[];

  constructor() { }

  public async addNewPhoto(){
   const captura = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
   }) ;

   console.log('revisar Capturada:', captura); // PAra verifica que captura tenga la información correcta
   
   const webviewPath = captura.webPath ? captura.webPath : '';
   console.log('revisar WebviewPath:', webviewPath);

   this.foto_tomada.unshift({
    //webviewPath: webviewPath,
    filepath:"photo",
    webviewPath: captura.webPath || '' 
    
   })
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////CODIGO ORG

