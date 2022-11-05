import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highchart-container',
  templateUrl: './highchart-container.component.html',
  styleUrls: ['./highchart-container.component.scss']
})
export class HighchartContainerComponent {

  @Input() Highcharts: any;
  @Input() constructorType: any;
  @Input() options: any;

  constructor() { }

}
