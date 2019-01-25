import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { UsersProvider } from '../../providers/usersprovider';
import { User } from'../../models/user';
import { Subscription } from 'rxjs';



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
    
    user : User[];
    userSubscription: Subscription;
    
    

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private userService : UsersProvider, private auth: AuthProvider) {
  }
  

  ionViewDidLoad() {
    this.userSubscription = this.auth.getUser().subscribe(user => {
      if (user) {
        this.user = user;
          console.log(this.user);
      }
    }, err => {
      console.warn('Could not get new user', err);
    });
    console.log('ionViewDidLoad UserPage');
  }
logOut() {
    this.auth.logOut();
  }
    
    private loadUsers(){

    this.userService.getUsers().subscribe(userslist => {this.users=userslist});

  console.log(this.users);


  }



deleteUser() {
        const confirm = this.alertCtrl.create({
            title: 'Delete Place?',
            message: 'Voulez-vous vraiment supprimer votre compte ?',
            buttons: [
                {
                    text: 'Oui',
                    handler: () => {
                        this.userService.deleteUser(this.user.id).subscribe();
                        this.navCtrl.setRoot(LoginPage, { opentab: 1 });
                        this.auth.getUser().subscribe(userList => {
                            this.userList = userList;

                        });
                        console.log('Do you want to delete this place? - Yes clicked');
                    }
                },
                {
                    text: 'Non',
                    handler: () => {
                        console.log('Do you want to delete this place? - No clicked');
                    }
                }
            ]
        });
        confirm.present();
    }




}
