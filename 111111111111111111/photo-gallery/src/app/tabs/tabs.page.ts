import { Component } from '@angular/core';

import {TABS} from "./tabs-config";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public tabs = TABS;
}
