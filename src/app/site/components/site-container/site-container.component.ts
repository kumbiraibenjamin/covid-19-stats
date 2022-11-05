import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highmaps";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";
import { CovidDataService } from '../../services/covid-data.service';
import { CountryService } from 'src/app/core/services/country.service';
import { map, Observable, switchMap } from 'rxjs';
import { Country } from 'src/app/core/models/country';
import { Response } from 'src/app/core/models/response.model';
import { UtilsService } from 'src/app/core/services/helpers/utils.service';


@Component({
  selector: 'app-site-container',
  templateUrl: './site-container.component.html',
  styleUrls: ['./site-container.component.scss']
})
export class SiteContainerComponent implements OnInit, OnDestroy {

  $countries: any;

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartOptions: Highcharts.Options | undefined;
  chartData = [];

  loading: boolean = false;

  cases: number = 0;
  deaths: number = 0;
  tests: number = 0;
  day: string = "";
  month: string = "";
  lastUpdated: string = "";
  year: number | undefined;


  showMap: boolean = false;

  selectedCountry: Response | undefined;
  selectedCountryName: string = "";

  data: any[] = [];

  constructor(
    private covidDataService: CovidDataService,
    private utilsService: UtilsService,
    private countryService: CountryService) { }

  ngOnInit(): void {
    this.loading = true;

    const today = new Date();
    let dayNumber = today.getDay();
    if (dayNumber < 10) this.day = `0${dayNumber}`;

    this.year = today.getFullYear();

    this.month = today.toLocaleString('en-us', { month: 'short' });

    this.$countries = this.getCountries().pipe().subscribe(data => {
      //  = this.generateGlobalStats(data);

      // this.cases = cases ? cases : 0;
      // this.deaths = deaths ? deaths : 0;
      // this.tests = tests ? tests : 0;
      // this.lastUpdated = <string>time;


      this.chartOptions = {
        chart: {
          map: worldMap,
        },
        title: {
          text: "Active Cases Summary"
        },
        subtitle: {
          text:
            ''
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: "spacingBox"
          }
        },
        legend: {
          enabled: true
        },
        colorAxis: {
          min: 0
        },
        series: [
          {
            type: "map",
            name: "COVID 19 Cases",
            states: {
              hover: {
                color: "#0A0039"
              }
            },
            dataLabels: {
              enabled: false,
              format: "{point.name}"
            },
            allAreas: false,
            data: this.updateMapData(data)
          }
        ]
      };
      this.data = data;

      // Default to Global 
      this.selectedCountry = data.find(c => c.country === 'All');
      this.selectedCountryName = "All";

      setTimeout(() => {
        this.showMap = true;
        this.loading = false;
      }, 200);
    })
  }

  getCountries() {
    let countriesList: Response[] = [];
    let countries: Response[] = [];
    return this.covidDataService.getAllStatistics()
      .pipe(
        switchMap((response) => {
          if (response.body?.response) {
            countries = [...response.body?.response];
          }
          return this.countryService.getCountriesList();
        }),
        map((res: Country[] | Object) => {
          let countriesL = <Country[]>res;
          if (countries.length > 0) {
            countries.forEach((c) => {
              const country = countriesL.find((item: Country) => {
                return item.name.split(' ').join('-').toLowerCase() === c.country.toLowerCase()
              });
              if (country) {
                c.code = country.code.toLowerCase();
                c.image = country.image;
                c.unicode = country.unicode;
                c.emoji = country.emoji;
                c.name = country.name;

              } else {
                const countryCheck = worldMap.features.find((item: any) => {
                  return item.properties.name.split(' ').join('-').toLowerCase() === c.country.toLowerCase()
                });
                if (countryCheck) {
                  c.code = countryCheck.properties["hc-key"];
                  c.name = countryCheck.properties.name;
                  c.image = "../../../../assets/country.png";
                } else {
                  c.image = c.country === 'All' ? "../../../../assets/globe.png" : "../../../../assets/country.png";
                  c.name = c.country;
                }
              }

              countriesList.push(c)
            })
          }
          return countriesList.sort(this.utilsService.sortBy("country"));
        })
      );
  }

  updateMapData(countries: Response[]): any {
    // let data: any[] = [];
    let data: any[] = [
      ["fo", 0],
      ["um", 0],
      ["us", 0],
      ["jp", 0],
      ["sc", 0],
      ["in", 0],
      ["fr", 0],
      ["fm", 0],
      ["cn", 0],
      ["pt", 0],
      ["sw", 0],
      ["sh", 0],
      ["br", 0],
      ["ki", 0],
      ["ph", 0],
      ["mx", 0],
      ["es", 0],
      ["bu", 0],
      ["mv", 0],
      ["sp", 0],
      ["gb", 0],
      ["gr", 0],
      ["as", 0],
      ["dk", 0],
      ["gl", 0],
      ["gu", 0],
      ["mp", 0],
      ["pr", 0],
      ["vi", 0],
      ["ca", 0],
      ["st", 0],
      ["cv", 0],
      ["dm", 0],
      ["nl", 0],
      ["jm", 0],
      ["ws", 0],
      ["om", 0],
      ["vc", 0],
      ["tr", 0],
      ["bd", 0],
      ["lc", 0],
      ["nr", 0],
      ["no", 0],
      ["kn", 0],
      ["bh", 0],
      ["to", 0],
      ["fi", 0],
      ["id", 0],
      ["mu", 0],
      ["se", 0],
      ["tt", 0],
      ["my", 0],
      ["pa", 0],
      ["pw", 0],
      ["tv", 0],
      ["mh", 0],
      ["cl", 0],
      ["th", 0],
      ["gd", 0],
      ["ee", 0],
      ["ag", 0],
      ["tw", 0],
      ["bb", 0],
      ["it", 0],
      ["mt", 0],
      ["vu", 0],
      ["sg", 0],
      ["cy", 0],
      ["lk", 0],
      ["km", 0],
      ["fj", 0],
      ["ru", 0],
      ["va", 0],
      ["sm", 0],
      ["kz", 0],
      ["az", 0],
      ["tj", 0],
      ["ls", 0],
      ["uz", 0],
      ["ma", 0],
      ["co", 0],
      ["tl", 0],
      ["tz", 0],
      ["ar", 0],
      ["sa", 0],
      ["pk", 0],
      ["ye", 0],
      ["ae", 0],
      ["ke", 0],
      ["pe", 0],
      ["do", 0],
      ["ht", 0],
      ["pg", 0],
      ["ao", 0],
      ["kh", 0],
      ["vn", 0],
      ["mz", 0],
      ["cr", 0],
      ["bj", 0],
      ["ng", 0],
      ["ir", 0],
      ["sv", 0],
      ["sl", 0],
      ["gw", 0],
      ["hr", 0],
      ["bz", 0],
      ["za", 0],
      ["cf", 0],
      ["sd", 0],
      ["cd", 0],
      ["kw", 0],
      ["de", 0],
      ["be", 0],
      ["ie", 0],
      ["kp", 0],
      ["kr", 0],
      ["gy", 0],
      ["hn", 0],
      ["mm", 0],
      ["ga", 0],
      ["gq", 0],
      ["ni", 0],
      ["lv", 0],
      ["ug", 0],
      ["mw", 0],
      ["am", 0],
      ["sx", 0],
      ["tm", 0],
      ["zm", 0],
      ["nc", 0],
      ["mr", 0],
      ["dz", 0],
      ["lt", 0],
      ["et", 0],
      ["er", 0],
      ["gh", 0],
      ["si", 0],
      ["gt", 0],
      ["ba", 0],
      ["jo", 0],
      ["sy", 0],
      ["mc", 0],
      ["al", 0],
      ["uy", 0],
      ["cnm", 0],
      ["mn", 0],
      ["rw", 0],
      ["so", 0],
      ["bo", 0],
      ["cm", 0],
      ["cg", 0],
      ["eh", 0],
      ["rs", 0],
      ["me", 0],
      ["tg", 0],
      ["la", 0],
      ["af", 0],
      ["ua", 0],
      ["sk", 0],
      ["jk", 0],
      ["bg", 0],
      ["qa", 0],
      ["li", 0],
      ["at", 0],
      ["sz", 0],
      ["hu", 0],
      ["ro", 0],
      ["ne", 0],
      ["lu", 0],
      ["ad", 0],
      ["ci", 0],
      ["lr", 0],
      ["bn", 0],
      ["iq", 0],
      ["ge", 0],
      ["gm", 0],
      ["ch", 0],
      ["td", 0],
      ["kv", 0],
      ["lb", 0],
      ["dj", 0],
      ["bi", 0],
      ["sr", 0],
      ["il", 0],
      ["ml", 0],
      ["sn", 0],
      ["gn", 0],
      ["zw", 0],
      ["pl", 0],
      ["mk", 0],
      ["py", 0],
      ["by", 0],
      ["cz", 0],
      ["bf", 0],
      ["na", 0],
      ["ly", 0],
      ["tn", 0],
      ["bt", 0],
      ["md", 0],
      ["ss", 0],
      ["bw", 0],
      ["bs", 0],
      ["nz", 0],
      ["cu", 0],
      ["ec", 0],
      ["au", 0],
      ["ve", 0],
      ["sb", 0],
      ["mg", 0],
      ["is", 0],
      ["eg", 0],
      ["kg", 0],
      ["np", 0],
      ["tz", 0]
    ];
    countries.forEach(c => {
      data.forEach((d) => {
        if (d[0] === c.code) {
          d[1] = c.cases.active;
        }

        // Manually update outliers
        // USA
        if (d[0] === 'us') {
          if (c.country === "USA") {
            d[1] = c.cases.active;
          }
        }

        // Faeroe-Islands
        if (d[0] === 'fo') {
          if (c.country === "Faeroe-Islands") {
            d[1] = c.cases.active;
          }
        }

        // UK
        if (d[0] === 'gb') {
          if (c.country === "UK") {
            d[1] = c.cases.active;
          }
        }

        // US-Virgin-Islands
        if (d[0] === 'vi') {
          if (c.country === "US-Virgin-Islands") {
            d[1] = c.cases.active;
          }
        }

        // Sao-Tome-and-Principe
        if (d[0] === 'st') {
          if (c.country === "Sao-Tome-and-Principe") {
            d[1] = c.cases.active;
          }
        }

        // Saint-Lucia
        if (d[0] === 'lc') {
          if (c.country === "Saint-Lucia") {
            d[1] = c.cases.active;
          }
        }

        // Saint-Kitts-and-Nevis
        if (d[0] === 'kn') {
          if (c.country === "Saint-Kitts-and-Nevis") {
            d[1] = c.cases.active;
          }
        }

        // Trinidad-and-Tobago
        if (d[0] === 'tt') {
          if (c.country === "Trinidad-and-Tobago") {
            d[1] = c.cases.active;
          }
        }
      });
    });

    return data;
  }


  onSelectCountry(event: Response) {
    this.selectedCountry = event;
  }

  onClearCountry() {
    this.selectedCountry = this.data[0];
    this.selectedCountryName = "Global";
  }

  ngOnDestroy() {
    if (this.$countries) {
      this.$countries.unsubscribe();
    }
  }

}
