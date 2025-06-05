import { Component } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-plot-area',
  standalone: false,
  templateUrl: './plot-area.component.html',
  styleUrl: './plot-area.component.css'
})
export class PlotAreaComponent {



  selectedChart = '';

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.currentChart.subscribe(chart => {
      this.selectedChart = chart;
    });
  }


}
