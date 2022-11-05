import { Component, Input, OnInit } from '@angular/core';
import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-covid-stats-cards',
  templateUrl: './covid-stats-cards.component.html',
  styleUrls: ['./covid-stats-cards.component.scss']
})
export class CovidStatsCardsComponent implements OnInit {
  @Input() selectedCountry: Response | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
