import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from "./main-page.component";
import { MainPageRoutingModule } from "./main-page.routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MainPageRoutingModule
  ],
  declarations: [MainPageComponent]
})
export class MainPageModule {}
