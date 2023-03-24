import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
} from 'ng-apexcharts/public_api';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  labels: any;

  constructor() {
    this.series = [44, 55, 13, 43, 22];
    this.chart = {
      type: 'donut',
    };
    this.labels = [
      'Andres Cepeda',
      'Natalia Jiménez',
      'Gloria Trevi',
      'Reik',
      'Gusi',
    ];
    this.title = {
      text: 'Ventas en el día por evento',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: '#263238',
      },
    };
  }
}
