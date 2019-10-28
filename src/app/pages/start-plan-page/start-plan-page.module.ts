import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPlanPageComponent } from './start-plan-page.component';
import { RouterModule, Routes } from '@angular/router';
import { StartPlanModule } from 'src/app/components/start-plan/start-plan.module';

const routes: Routes = [
  { path: '', component: StartPlanPageComponent }
];


@NgModule({
  declarations: [StartPlanPageComponent],
  imports: [
    CommonModule,
    StartPlanModule,
    RouterModule.forChild(routes)
  ]
})
export class StartPlanPageModule { }
