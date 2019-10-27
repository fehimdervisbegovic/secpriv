import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';


const routes: Routes = [
  { path: '', redirectTo: '/startplan', pathMatch: 'full'},
  { path: '', component: MainLayoutComponent, children: [
      {
        path: 'startplan',
        loadChildren: () => import(`src/app/pages/start-plan-page/start-plan-page.module`).then(m => m.StartPlanPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
