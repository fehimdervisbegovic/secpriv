import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPlanPageComponent } from './start-plan-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StartPlanPageComponent }
];


@NgModule({
  declarations: [StartPlanPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StartPlanPageModule { }
