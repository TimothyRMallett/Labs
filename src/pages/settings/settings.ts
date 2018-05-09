import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

	//public name = "sting";
  //public showNotifications:boolean;
  //public reminder = new Date();
  public settings = {
    "name":"",
    "showNotifications":false,
    "reminder":""
  };
  public reminderString: string;
  public objString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
 
    this.storage.get("appSettings").then((val) => {
      this.objString = val;
      this.settings = JSON.parse(val);
      //this.name = this.settings.name;
      //this.showNotifications = this.settings.showNotifications;
      this.reminderString = this.settings.reminder;

      console.log(val);
      //console.log(this.name, this.showNotifications, this.reminderString);
      });

  }


  changeSettings(){
  	this.storage.set("appSettings", JSON.stringify(this.settings));
  }

}
