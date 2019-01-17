import { Component } from '@angular/core';

import { UsersPage } from '../users/users';
import { PlaceMapPage } from '../place-map/place-map';
import { TripsPage } from '../trips/trips';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UsersPage;
  tab2Root = PlaceMapPage;
  tab3Root = TripsPage;

  constructor() {

  }
}
