import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlotAreaComponent } from './plot-area/plot-area.component';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { TreemapChartComponent } from './charts/treemap-chart/treemap-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { StackedBarChartComponent } from './charts/stacked-bar-chart/stacked-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    PlotAreaComponent,
    ChartContainerComponent,
    PageNotFoundComponent,
    LineChartComponent,
    ColumnChartComponent,
    AreaChartComponent,
    TreemapChartComponent,
    PieChartComponent,
    StackedBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
