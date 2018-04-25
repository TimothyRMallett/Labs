import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

	public name = "sting";
  public showNotifications:boolean;
  public settings = {name:"", showNotifications: false, reminder: ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.storage.get("appSettings").then((val) => {
      this.settings = val;
      this.name = val.name;
      this.showNotifications = val.notifications;
    });
    console.log(this.settings.name, this.settings.showNotifications, this.name, this.showNotifications);
  }


  addName(){
  	console.log(this.settings.name);
    console.log(this.settings.showNotifications);
    console.log(this.name);
    console.log(this.showNotifications);
  	//this.storage.set("name", this.name);
  }

  toggleNotifications(){
    
    console.log(this.showNotifications);
  }

}
