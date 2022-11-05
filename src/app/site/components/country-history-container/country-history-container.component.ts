import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Response } from 'src/app/core/models/response.model';
import { CovidDataService } from '../../services/covid-data.service';

@Component({
  selector: 'app-country-history-container',
  templateUrl: './country-history-container.component.html',
  styleUrls: ['./country-history-container.component.scss']
})
export class CountryHistoryContainerComponent implements OnInit, OnChanges {
  @Input() selectedCountry: Response | undefined;
  history: Response[] = [];
  loading = false;
  data: Response[] = [];

  $historyItems: any;

  constructor(private covidDataService: CovidDataService) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.loading = true;
    this.$historyItems = this.covidDataService.getCountryHistory(<string>this.selectedCountry?.country).pipe().subscribe(data => {
      if (data.body?.response) {
        this.data = data.body?.response;
      }
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.$historyItems.unsubscribe();
  }






}
