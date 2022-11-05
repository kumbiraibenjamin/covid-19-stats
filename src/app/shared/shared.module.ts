import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CovidStatsCardsComponent } from './components/covid-stats-cards/covid-stats-cards.component';
import { CovidStatCardComponent } from './components/covid-stat-card/covid-stat-card.component';
import { CovidHistoryCardsComponent } from './components/covid-history-cards/covid-history-cards.component';
import { HighchartContainerComponent } from './components/highchart-container/highchart-container.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgChartsModule } from 'ng2-charts';
import { ChartjsContainerComponent } from './components/chartjs-container/chartjs-container.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    CovidStatsCardsComponent,
    CovidStatCardComponent,
    CovidHistoryCardsComponent,
    HighchartContainerComponent,
    ChartjsContainerComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    NgChartsModule,
  ],
  exports: [
    SpinnerComponent,
    CovidStatsCardsComponent,
    CovidStatCardComponent,
    CovidHistoryCardsComponent,
    HighchartContainerComponent
  ]
})
export class SharedModule { }
