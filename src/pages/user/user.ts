import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../../services/user-service';
import { SecureStorageProvider } from '../../providers/secure-storage/secure-storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private secStorage:SecureStorageProvider,private userService:UserService) {
    this.storage.keys().then((data) => {
      console.log(data);
    });
    this.loadUser();
  };
  
  loadUser(){
    this.secStorage.setKey("Ciao");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
