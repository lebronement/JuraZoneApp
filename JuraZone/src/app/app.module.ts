
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

//pages de base du thème
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//pages générées
import { UsersPage } from '../pages/users/users';
import { PlacesPage } from '../pages/places/places';
import { PlaceListPage } from '../pages/place-list/place-list';
import { PlaceMapPage } from '../pages/place-map/place-map';
import { TripsPage } from '../pages/trips/trips';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import de plugins nécessaires
import { Geolocation } from '@ionic-native/geolocation';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Camera } from '@ionic-native/camera';
import { PictureProvider } from '../providers/picture/picture';
import { PlaceProvider } from '../providers/place/place';
import { LoginProvider } from '../providers/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    UsersPage,
      PlacesPage,
    PlaceListPage,
      PlaceMapPage,
      TripsPage,
      LoginPage,
      SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LeafletModule.forRoot(), 
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
      UsersPage,
      PlacesPage,
    PlaceListPage,
      PlaceMapPage,
      TripsPage,
      LoginPage,
      SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
      Geolocation,
      Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PictureProvider,
      PlaceProvider,
    LoginProvider,
    AuthProvider
  ]
})
export class AppModule {}

