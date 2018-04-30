import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	public contacts = [
		{firstName:"Tim", lastName:"Mallett", email:"timothyrmallett@gmail.com"},
		{firstName:"Tommi", lastName:"Sulli", email:"IDontKnow@andIDontCare.com"},
		{firstName:"Zach", lastName:"Unknown", email:"ILikeDoingBackend@notasexualpun.com"},
		{firstName:"Jolon", lastName:"Faichney", email:"ThereIsNoWayImSeeingthisBecauseImNever@labs.com"}
	];

	public test = ["this","is","a","list"];

	  constructor(public navCtrl: NavController) {
	  	console.log(this.test[1]);
	  }

	  addContact(){
	  	
	  }



}
