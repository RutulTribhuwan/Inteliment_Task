import { Component } from '@angular/core';
import Highcharts from 'highcharts';


@Component({
  selector: 'app-line-chart',
  standalone: false,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Sales'
    },
    series: [{
      name: 'Sales',
      type: 'line',         // ✅ important: must be a literal, not a string
      data: [10, 20, 30, 40, 50]
    }] as Highcharts.SeriesOptionsType[] // ✅ cast it properly
  };
}
