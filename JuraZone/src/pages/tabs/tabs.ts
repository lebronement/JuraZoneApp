import { Component } from '@angular/core';

import { UsersPage } from '../users/users';
import { PlacesPage } from '../places/places';
import { TripsPage } from '../trips/trips';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UsersPage;
  tab2Root = PlacesPage;
  tab3Root = TripsPage;

  constructor() {

  }
}
