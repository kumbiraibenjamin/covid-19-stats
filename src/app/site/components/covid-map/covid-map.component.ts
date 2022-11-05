import { Component, Input, } from '@angular/core';


@Component({
  selector: 'app-covid-map',
  templateUrl: './covid-map.component.html',
  styleUrls: ['./covid-map.component.scss']
})
export class CovidMapComponent {

  @Input() Highcharts: any;
  @Input() constructorType: any;
  @Input() options: any;

  @Input() showMap = false;

  constructor() { }


}
