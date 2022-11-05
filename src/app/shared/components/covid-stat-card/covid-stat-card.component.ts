import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-stat-card',
  templateUrl: './covid-stat-card.component.html',
  styleUrls: ['./covid-stat-card.component.scss']
})
export class CovidStatCardComponent implements OnInit {
  @Input() title: string = "";
  @Input() count: number | null | undefined | string;

  @HostBinding("style.--color")
  @Input() color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
