import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageSecondaryComponent } from "./main-page-secondary.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageSecondaryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageSecondaryRoutingModule {}
