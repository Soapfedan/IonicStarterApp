import {Component, ViewChild} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { UserDetail } from "../../services/user-details";
import { AuthService } from "../../services/auth-service";
import { User } from "../../user";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild("email") email;
  @ViewChild("password") password;

  constructor(public nav: NavController,private userDetail:UserDetail,private authService:AuthService, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    var userList;
    this.userDetail.load().then((data)=>{
      userList=data;
      for (let index = 0; index < userList.length; index++) {
        let element = userList[index];
        console.log("Utente "+element["email"]);
        if(element["email"] == this.email.value){
          console.log("User found");
          if(element["password"]==this.password.value){
            this.nav.setRoot(HomePage);
              this.authService.storeUser(new User(element["name"],element["surname"]));
          }
        }else{
          console.log("User not found")
        }
      }
    }).catch((data)=>{
      console.log("The server is not reachable");
      userList=data;
      for (let index = 0; index < userList.length; index++) {
        let element = userList[index];
        console.log("Utente "+element["email"]);
        if(element["email"] == this.email.value){
          console.log("User found");
          if(element["password"]==this.password.value){
            this.nav.setRoot(HomePage);
              this.authService.storeUser(new User(element["name"],element["surname"]));
          }
        }else{
          console.log("User not found")
        }
      }
    });
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
