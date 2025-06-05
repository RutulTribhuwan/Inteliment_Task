import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

 private chartName = new BehaviorSubject<string>('');
  currentChart = this.chartName.asObservable();

  selectChart(chart: string) {
    this.chartName.next(chart);
  }
}

