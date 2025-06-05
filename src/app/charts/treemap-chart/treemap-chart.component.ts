import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-treemap-chart',
  standalone: false,
  templateUrl: './treemap-chart.component.html',
  styleUrl: './treemap-chart.component.css'
})
export class TreemapChartComponent {



  Highcharts = Highcharts;

chartOptions: Highcharts.Options = {};

async ngOnInit() {
  // Load the treemap module dynamically and initialize it
  const treemap = await import('highcharts/modules/treemap');
  treemap.default(Highcharts);

  this.chartOptions = {
    chart: {
      type: 'treemap' as const
    },
    title: {
      text: 'Treemap Chart Example'
    },
    series: [{
      type: 'treemap' as const,
      layoutAlgorithm: 'squarified',
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      data: [
        { name: 'Apple', value: 10, color: '#e63946' },
        { name: 'Banana', value: 20, color: '#f4a261' },
        { name: 'Cherry', value: 30, color: '#2a9d8f' },
        { name: 'Date', value: 40, color: '#264653' }
      ]
    }]
  };

}
}
