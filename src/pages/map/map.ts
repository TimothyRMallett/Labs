import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

	@ViewChild('map')mapEl;
	map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let latLng = new google.maps.LatLng(-27.962349, 153.380788);
    let mapOptions = {
    					center:latLng,
    					zoom: 16,
    					mapTypeId: google.maps.MapTypeId.ROADMAP
    				}
    this.map = new google.maps.Map(this.mapEl.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
    	map:this.map,
    	animation: google.maps.Animation.DROP,
    	position:this.map.getCenter()
    });
  }

}
