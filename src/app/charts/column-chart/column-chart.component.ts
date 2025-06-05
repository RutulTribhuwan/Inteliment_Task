import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-column-chart',
  standalone: false,
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.css'
})
export class ColumnChartComponent {



   Highcharts = Highcharts;

chartOptions: Highcharts.Options = {
  chart: {
    type: 'column' as const
  },
  title: {
    text: 'Column Chart Example'
  },
  series: [
    {
      name: 'Data',
      type: 'column' as const,
      data: [10, 20, 15, 30]
    }
  ]
}
}
