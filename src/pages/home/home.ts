import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public image: string;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }
  ionViewDidEnter(){
  	this.storage.get("image").then((val)=>{
  		if(val === null){
  			console.log("no Image uploaded");
  		}
  		else{
  			this.image = val;
  		}
  	});
  }

}
