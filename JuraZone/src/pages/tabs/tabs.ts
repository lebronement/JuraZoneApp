import { Component } from '@angular/core';

import { PlaceListPage } from '../place-list/place-list';
import { PlaceMapPage } from '../place-map/place-map';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlaceListPage;
  tab3Root = PlaceMapPage;

  constructor() {

  }
}
