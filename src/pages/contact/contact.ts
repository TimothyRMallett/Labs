import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

import { AddContactPage } from '../add-contact/add-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	public addContactModal = this.modCtrl.create(AddContactPage);

	public contacts = [
		{firstName:"Tim", lastName:"Mallett", email:"timothyrmallett@gmail.com"},
		{firstName:"Tommi", lastName:"Sulli", email:"IDontKnow@andIDontCare.com"},
		{firstName:"Zach", lastName:"Unknown", email:"ILikeDoingBackend@notasexualpun.com"},
		{firstName:"Jolon", lastName:"Faichney", email:"ThereIsNoWayImSeeingthisBecauseImNever@labs.com"}
	];

	public firstName: string;
	public lastName: string;
	public email: string;

	public test = ["this","is","a","list"];

  constructor(public navCtrl: NavController, public modCtrl: ModalController, public navParams: NavParams) {

  }

  addContact(firstName: string, lastName: string, email: string){
  	this.contacts.push({firstName, lastName, email});
  }

  deleteContact(index: number){
  	if(confirm("Delete " + this.contacts[index].firstName + " " + this.contacts[index].lastName + "?")){
  		this.contacts.splice(index, 1);
  	}
  }

  showAddContactModal(){
  	this.addContactModal.onDidDismiss(data => {
  		this.firstName = data.firstName;
  		this.lastName = data.lastName;
  		this.email = data.email;
  		console.log(this.firstName, this.lastName, this.email);
  		this.addContact(this.firstName, this.lastName, this.email);
  	});
  	this.addContactModal.present();
  }



}
