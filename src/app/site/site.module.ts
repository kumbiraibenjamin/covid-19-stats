import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

import { SiteContainerComponent } from './components/site-container/site-container.component';
import { CovidMapComponent } from './components/covid-map/covid-map.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CountryHistoryContainerComponent } from './components/country-history-container/country-history-container.component';

@NgModule({
  declarations: [
    SiteContainerComponent,
    CovidMapComponent,
    CountryHistoryContainerComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    HighchartsChartModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule

  ]
})
export class SiteModule { }
