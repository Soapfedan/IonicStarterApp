import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { UserPage } from "../pages/user/user";
import { AuthService } from "../services/auth-service";
import { User } from "../user";
import { SecureStorage, SecureStorageObject } from "@ionic-native/secure-storage";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html',
  providers:[AuthService]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  name:string;
  surname:string;
  user:User;
  rootPage: any;
  logged:boolean;
  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    private auth:AuthService
  ) {
    this.initializeApp();
    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Local Weather', component: LocalWeatherPage, icon: 'partly-sunny'},
      {title: 'User', component: UserPage, icon: 'contact'}
    ];
    this.checkUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);

   




    });
  }

  checkUser(){
    let user:User;
    this.auth.isLogged().then((val:boolean)=>{
      //this.logged=val;
      console.log("Risultato logged "+val);
      this.nav.setRoot(HomePage);
      this.logged=val;
    }).catch((val)=>{
      console.log("Risultato not logged "+val);
      this.nav.setRoot(LoginPage);
      this.logged=val;
    });

    this.auth.getUser().then((val:User)=>{
      console.log("Stampo su home "+val.name);
      this.name=val.name;
      this.surname=val.surname;
    }).catch((val)=>{
      console.log("Stampo su home "+val.name);
      this.name=val.name;
      this.surname=val.surname;
    });
  }




  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
    this.auth.clearUser();
  }

  

}
