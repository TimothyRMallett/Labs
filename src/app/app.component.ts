import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  remindered = new Date(2000,1,12,1,0,0,0);
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get("appSettings").then((val) => {
      if(val == null){
          this.storage.set("appSettings", JSON.stringify({name:"timbo", showNotifications: false, reminder: this.remindered.toISOString()}));
          //this.storage.set("appSettings", JSON.stringify({"name":"timbo", "showNotifications": false, "reminder": 200011100}));
        }
    });
      this.storage.get("name").then((val) => {
      if(val == null){
          this.storage.set("name", "timbo");
        }
    });
      this.storage.get("showNotifications").then((val) => {
      if(val == null){
          this.storage.set("showNotifications", false);
        }
    });
      this.storage.get("reminder").then((val) => {
      if(val == null){
          this.storage.set("reminder", this.remindered.toISOString());
        }
    });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
