import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';



@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

	@ViewChild('barCanvas')barCanvas;
	barChart: any;

	public chartData:Array<any> = [
	  {data: [10, 15, 33, 37, 42, 51, 60, 61, 63, 57], label: 'Correct Notes'},
	  {data: [26, 23, 14, 17, 13, 11, 6, 8, 11, 4, 5], label: 'Incorrect Notes'}
	];

	public chartLabels:Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8','9','10'];

	public chartType:string = 'line';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
    	type: 'bar',
    	data: {
    		labels: ["1","2","3","4","5"],
    		datasets:[{
    			label: '# of Votes',
    			data: [10, 15, 33, 37, 42],
    			backgroundColor: [
    				'rgba(255, 17, 100, 0.3)'
    			]
    		}]
    	}
    });
  }

}
