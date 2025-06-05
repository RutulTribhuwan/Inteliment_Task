import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

   { path: '', redirectTo: '/charts', pathMatch: 'full' },
  { path: 'charts', component: ChartContainerComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
