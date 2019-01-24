import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
  // TODO: inject the authentication provider.
  private auth: AuthProvider,
  platform: Platform,
  statusBar: StatusBar,
  splashScreen: SplashScreen
) {

  // TODO: redirect the user to the login page if not authenticated.
  // Direct the user to the correct page depending on whether he or she is logged in.
  this.auth.isAuthenticated().subscribe(authenticated => {
    if (authenticated) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = LoginPage;
    }
  });

}
}
