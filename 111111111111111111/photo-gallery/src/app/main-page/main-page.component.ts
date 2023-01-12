import { Component } from '@angular/core';

import { TABS } from "../tabs/tabs-config";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public tabs = TABS
}
