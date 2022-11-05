import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-covid-history-cards',
  templateUrl: './covid-history-cards.component.html',
  styleUrls: ['./covid-history-cards.component.scss']
})
export class CovidHistoryCardsComponent implements OnInit, OnChanges {

  @Input() data: Response[] = [];
  @Input() showgraphs: boolean = false;
  @Input() selectedCountry: Response | undefined;

  casesCharts: { caseChartData: any, caseChartOptions: any, caseChartType: any } | undefined;
  deathsCharts: { deathsChartData: any, deathsChartOptions: any, deathsChartType: any } | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.casesCharts = this.generateCasesData(this.data);
    this.deathsCharts = this.generateDeathsData(this.data);
  }

  generateCasesData(data: Response[]) {
    const { months, result } = this.getMonthlyData(data);
    const caseChartData: ChartConfiguration['data'] = {
      datasets: [
        {
          data: [...result.map(d => d.cases.active)],
          label: 'Active Cases',
          backgroundColor: 'rgba(0,74,159,0.2)',
          borderColor: '#004a9f',
          pointBackgroundColor: '#004a9f',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
        {
          data: [...result.map(d => parseInt(<string>d.cases.new))],
          label: 'New Cases',
          backgroundColor: 'rgba(13,202,240,0.2)',
          borderColor: '#0dcaf0',
          pointBackgroundColor: '#0dcaf0',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)',
          fill: 'origin',
        },
        {
          data: [...result.map(d => d.cases.critical)],
          label: 'Critical',
          backgroundColor: 'rgba(255,193,7,0.2)',
          borderColor: '#ffc107',
          pointBackgroundColor: '#ffc107',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
        {
          data: [...result.map(d => d.cases.recovered)],
          label: 'Recovered',
          yAxisID: 'y-axis-1',
          backgroundColor: 'rgba(21,202,32,0.2)',
          borderColor: '#15ca20',
          pointBackgroundColor: '#15ca20',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        }
      ],
      labels: [...months]
    };

    const caseChartOptions: ChartConfiguration['options'] = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {},
        'y-axis-0':
        {
          position: 'left',
        },
        'y-axis-1': {
          position: 'right',

          ticks: {
            color: '#15ca20'
          }
        }
      },


    };

    const caseChartType: ChartType = 'line';


    return { caseChartData, caseChartOptions, caseChartType }
  }

  generateDeathsData(data: Response[]) {
    const { months, result } = this.getMonthlyData(data);
    const deathsChartData: ChartConfiguration['data'] = {
      datasets: [
        {
          data: [...result.map(d => parseInt(<string>d.deaths.new))],
          label: 'New Deaths',
          backgroundColor: 'rgba(80,5,80,0.2)',
          borderColor: '#500550',
          pointBackgroundColor: '#500550',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
        {
          data: [...result.map(d => d.deaths.total)],
          label: 'Deaths',
          backgroundColor: 'rgba(253,53,80,0.2)',
          borderColor: '#fd3550',
          yAxisID: 'y-axis-1',
          pointBackgroundColor: '#fd3550',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)',
          fill: 'origin',
        },
      ],
      labels: [...months]
    };

    const deathsChartOptions: ChartConfiguration['options'] = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        x: {},
        'y-axis-0':
        {
          position: 'left',
        },
        'y-axis-1': {
          position: 'right',

          ticks: {
            color: 'red'
          }
        }
      },

    };

    const deathsChartType: ChartType = 'line';


    return { deathsChartData, deathsChartOptions, deathsChartType }
  }

  getMonthlyData(data: Response[]) {
    const monthSet: Set<string | undefined> = new Set<string | undefined>(data.map(d => d.day?.slice(0, 7)));
    const months: string[] = <string[]>Array.from(monthSet).reverse();
    let result: Response[] = [];

    // data.forEach((d) => {
    months.forEach((m: string) => {
      const mData = data.filter((d) => d.day?.includes(m));
      const monthlyReponse = this.generateMonthlyStats(mData, m);
      result.push(monthlyReponse);
    });

    return { months, result };

  }

  generateMonthlyStats(data: Response[], month: string): Response {

    const newCases = data.map(c => parseInt(<string>c.cases?.new)).reduce((p: number | null, c: number | null) => {
      p = p ? p : 0;
      c = c ? c : 0;
      return p + c;
    });

    const newDeaths = data.map(c => parseInt(<string>c.deaths?.new)).reduce((p: number | null, c: number | null) => {
      p = p ? p : 0;
      c = c ? c : 0;
      return p + c;
    });


    const response: Response = {
      cases: {
        new: newCases,
        active: data[0].cases.active,
        critical: data[0].cases.critical,
        recovered: data[0].cases.recovered,
        "1M_pop": "",
        total: data[0].cases.total
      },
      deaths: {
        new: newDeaths,
        "1M_pop": "",
        total: data[0].deaths.total,
      },
      tests: {
        "1M_pop": "",
        total: data[0].tests.total
      },
      continent: data[0].continent,
      country: data[0].country,
      population: data[0].population,
      day: month,
      time: data[0].time,
      code: data[0].code,
      image: data[0].image,
      unicode: data[0].unicode,
      emoji: data[0].emoji,
      name: data[0].name,
    };
    return response;

  }

}
