import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageSecondaryRoutingModule } from "./main-page-secondary.routing.module";
import { MainPageSecondaryComponent } from "./main-page-secondary.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MainPageSecondaryRoutingModule
  ],
  declarations: [MainPageSecondaryComponent]
})
export class MainPageSecondaryModule {}
