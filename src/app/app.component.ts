import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private dateString = '10/12/2017';
  private then = moment(this.dateString, 'DD/MM/YYYY');
  private now = moment();

  years = '';
  months = '';
  days = '';
  hours = '';
  minutes = '';
  seconds = '';

  ngOnInit(): void {
    this.updateVariables();

    setInterval(() => {
      this.then = moment(this.dateString, 'DD/MM/YYYY');
      this.now = moment();
      this.updateVariables();
    }, 1000);
  }

  private updateVariables(): void {
    this.hours = this.now.format('hh');
    this.minutes = this.now.format('mm');
    this.seconds = this.now.format('ss');
    this.years = this.now.diff(this.then, 'years').toString();
    this.then.add(this.years, 'years');
    this.months = this.now.diff(this.then, 'months').toString();
    this.then.add(this.months, 'months');
    this.days = this.now.diff(this.then, 'days').toString();
  }

}
