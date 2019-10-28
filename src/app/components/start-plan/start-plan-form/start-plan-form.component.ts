import { Component, OnInit } from '@angular/core';
import { PlanApiService } from 'src/app/services/plan-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-start-plan-form',
  templateUrl: './start-plan-form.component.html',
  styleUrls: ['./start-plan-form.component.sass']
})
export class StartPlanFormComponent implements OnInit {

  fg: FormGroup;

  constructor(private planApi: PlanApiService, private fb: FormBuilder) {
    this.initialiseForm();
   }

  startPlan = () => {

    ValidationService.validateAllFormFields(this.fg);

    if (this.fg.invalid) {
      return;
    }

    alert(`Enterprise plan has been successfully started`);

    this.planApi.startPlan();

    this.fg.reset();
  }

  isFieldValid(field: string) {
    return !this.fg.get(field).valid && this.fg.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      // 'has-feedback': this.isFieldValid(field)
    };
  }

  initialiseForm() {
    this.fg = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      company: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', []],
      webSite: ['', [Validators.required, Validators.pattern(ValidationService.reg)]],
      additionalWebSites: ['', []],
    });
  }

  ngOnInit() {
  }

}
