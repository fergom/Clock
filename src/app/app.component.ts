import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private ms = 0;

  MONTHS_CONST = 12;
  HOURS_CONST = 24;
  MINUTES_SECONDS_CONST = 60;

  years = 0;
  months = 0;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit(): void {
    const then = '10/12/2017';
    this.ms = moment.duration(moment().diff(moment(then, 'DD/MM/YYYY'))).asMilliseconds();
    this.updateVariables();

    setInterval(() => {
      this.ms += 1000;
      this.updateVariables();
    }, 1000);
  }

  getDaysOfMonth(): number {
    return moment().daysInMonth();
  }

  private updateVariables(): void {
    const duration = moment.duration(this.ms, 'milliseconds');

    this.years = Math.floor(duration.asYears());
    this.months = Math.floor(duration.asMonths());
    this.days = Math.floor(duration.asDays());
    this.hours = Math.floor(duration.asHours());
    this.minutes = Math.floor(duration.asMinutes());
    this.seconds = Math.floor(duration.asSeconds());
  }

}
