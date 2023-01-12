import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AchievementsPageComponentContainer} from "./achievements-page.component.container";

const routes: Routes = [
  {
    path: '',
    component: AchievementsPageComponentContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchievementsPageRoutingModule {}
