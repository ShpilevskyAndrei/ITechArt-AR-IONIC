import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AchievementsPageRoutingModule } from "./achievements-page.routing.module";
import { AchievementsPageComponent } from "./achievements-page.component";
import { AchievementsPageComponentContainer } from "./achievements-page.component.container";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AchievementsPageRoutingModule
  ],
  declarations: [AchievementsPageComponentContainer, AchievementsPageComponent]
})
export class AchievementsPageModule {}
