import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CameraMarkerBasedPage } from './camera-marker-based.page';

const routes: Routes = [
  {
    path: '',
    component: CameraMarkerBasedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraMarkerBasedRoutingModule {}
