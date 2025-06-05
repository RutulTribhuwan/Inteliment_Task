import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-stacked-bar-chart',
  standalone: false,
  templateUrl: './stacked-bar-chart.component.html',
  styleUrl: './stacked-bar-chart.component.css'
})
export class StackedBarChartComponent {


  Highcharts = Highcharts;

chartOptions: Highcharts.Options = {
  chart: {
    type: 'bar' as const
  },
  title: {
    text: 'Stacked Bar Chart Example'
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption',
      align: 'high'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold'
      }
    }
  },
  plotOptions: {
    series: {
      stacking: 'normal' as const,
      dataLabels: {
        enabled: true
      }
    }
  },
  series: [
    { name: 'John', type: 'bar' as const, data: [5, 3, 4, 7] },
    { name: 'Jane', type: 'bar' as const, data: [2, 2, 3, 2] },
    { name: 'Joe', type: 'bar' as const, data: [3, 4, 4, 2] }
  ]

};
}
