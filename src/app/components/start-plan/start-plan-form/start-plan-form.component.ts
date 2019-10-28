import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlanApiService } from 'src/app/services/plan-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { EmailMessageDto } from 'src/app/model/email-message-dto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-plan-form',
  templateUrl: './start-plan-form.component.html',
  styleUrls: ['./start-plan-form.component.sass']
})
export class StartPlanFormComponent implements OnInit, OnDestroy {

  startPlanSubscription: Subscription;
  fg: FormGroup;

  constructor(private planApi: PlanApiService, private fb: FormBuilder) {
    this.initialiseForm();
  }

  /**
   * Starts a new subscription Plan
   */
  startPlan = () => {

    // touch all fields to make errors visible
    ValidationService.validateAllFormFields(this.fg);

    if (this.fg.invalid) { return; }

    // sample Email request
    const startPlanEmailMessage: EmailMessageDto = {
      To: this.fg.value.email,
      Subject: 'Enterprise plan activation',
      Body: `Hello ${this.fg.value.name}. You have successfully registered for our Entrprise plan.`
    };

    this.startPlanSubscription = this.planApi.startPlan(startPlanEmailMessage).subscribe(response => {
      alert(`Enterprise plan has been successfully started`);
    }, err => {
      console.log(err, err.message);
      alert(`Unexpected error: ${err.message}`);
    });

    this.fg.reset();
  }

  /**
   * If field is touched and invalid returns true otherwise false
   * @param field Name of the field
   */
  isFieldValid(field: string) {
    return !this.fg.get(field).valid && this.fg.get(field).touched;
  }

  /**
   * Return has-error css class if field has an error
   * @param field name of the form field
   */
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
    };
  }

  /**
   * Initialise form group object
   */
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

  ngOnDestroy() {
    if (this.startPlanSubscription) {
      this.startPlanSubscription.unsubscribe();
    }
  }
}
