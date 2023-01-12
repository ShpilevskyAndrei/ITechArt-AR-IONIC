import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../main-page-secondary/main-page-secondary.module').then(m => m.MainPageSecondaryModule)
      },
      {
        path: 'achievements',
        loadChildren: () => import('../achievements-page/achievements-page.module').then(m => m.AchievementsPageModule)
      },
      {
        path: 'camera-marker-based',
        loadChildren: () => import('../camera-marker-based/camera-marker-based.module').then(m => m.CameraMarkerBasedModule)
      },

      // {
      //   path: 'tab2',
      //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
