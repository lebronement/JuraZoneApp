import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../../app/config';
import { Login } from'../../models/login';

import { Observable } from 'rxjs/Rx';

/*
  Generated class for the PlacePrivider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) { 
  }
}
