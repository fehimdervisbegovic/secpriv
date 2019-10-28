import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StartPlanFormComponent } from './start-plan-form/start-plan-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StartPlanFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    StartPlanFormComponent
  ]
})
export class StartPlanModule { }
