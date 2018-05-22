import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user-service';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  users:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private userService:UserService) {
    this.storage.keys().then((data) => {
      console.log(data);
    });
    this.loadUser();
  };
  
  loadUser(){
    this.userService.load()
    .then(data => {
      this.users=data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
