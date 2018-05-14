import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';



@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

	public chartNum: number;
	public labelNum: number;

	@ViewChild('barChartCanvas')barCanvas;
	barChart: any;

	public chartData = [10, 15, 33, 37, 42];

	public chartLabels = ['1', '2', '3', '4', '5'];

	public chartType:string = 'line';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.labelNum = this.chartLabels.length;
    this.barChart = new Chart(this.barCanvas.nativeElement, {
    	type: 'bar',
    	data: {
    		labels: this.chartLabels,
    		datasets:[{
    			label: '# of Numbers lol',
    			data: this.chartData,
    			backgroundColor: [
    				'rgba(255, 17, 100, 0.3)'
    			]
    		}]
    	}
    });
  }

  addToChart(){
    this.chartData.push(this.chartNum);
    this.labelNum++;
    this.chartLabels.push(this.labelNum.toString());
    this.barChart.update();
  }

}
