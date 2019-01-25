import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { UsersProvider } from '../../providers/usersprovider';
import { User } from'../../models/user';



/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
    
    users : User[];
    
    

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, private userService: UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    this.loadUsers();
  }
logOut() {
    this.auth.logOut();
  }
    
    private loadUsers(){

    this.userService.getUsers().subscribe(userslist => {this.users=userslist});

  console.log(this.users);


  }


  

}
