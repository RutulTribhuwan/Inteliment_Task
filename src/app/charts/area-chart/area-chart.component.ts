import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  standalone: false,
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.css'
})
export class AreaChartComponent {



  Highcharts = Highcharts;

chartOptions: Highcharts.Options = {
  chart: {
    type: 'area' as const
  },
  title: {
    text: 'Area Chart Example'
  },
  series: [
    {
      name: 'Data',
      type: 'area' as const,
      data: [5, 10, 7, 12]
    }
  ]

}
}
