import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CameraMarkerBasedPage } from './camera-marker-based.page';
import { CameraMarkerBasedRoutingModule } from "./camera-marker-based-routing.module";
import { CongratsComponent } from "../congrats/congrats.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CameraMarkerBasedRoutingModule
  ],
    declarations: [CameraMarkerBasedPage, CongratsComponent]
})
export class CameraMarkerBasedModule {}
