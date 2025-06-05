import { Component } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


   constructor(private chartService: ChartService) {}

  select(chart: string) {
    this.chartService.selectChart(chart);
  }

}
