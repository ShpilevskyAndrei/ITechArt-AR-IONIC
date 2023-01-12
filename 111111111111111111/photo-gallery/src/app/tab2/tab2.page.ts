import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public isSceneVisible: boolean = false;

  constructor(public photoService: PhotoService, private modalCtrl: ModalController) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
