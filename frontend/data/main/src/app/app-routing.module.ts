import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // component: PageHomeComponent
    loadChildren: () => import('./pages/page-home/page-home.module').then(m => m.PageHomeModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/page-map/page-map.module').then(m => m.PageMapModule)
  },
  {
    path: 'analysis',
    loadChildren: () => import('./pages/page-analysis/page-analysis.module').then(m => m.PageAnalysisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
