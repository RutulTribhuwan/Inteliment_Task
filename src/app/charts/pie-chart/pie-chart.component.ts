import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  standalone: false,
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {


  Highcharts = Highcharts;

chartOptions: Highcharts.Options = {
  chart: {
    type: 'pie' as const
  },
  title: {
    text: 'Pie Chart Example'
  },
  series: [{
    name: 'Fruits',
    type: 'pie' as const,
    data: [
      { name: 'Apple', y: 30 },
      { name: 'Banana', y: 20 },
      { name: 'Cherry', y: 25 },
      { name: 'Date', y: 25 }
    ]
  }]
};


}
