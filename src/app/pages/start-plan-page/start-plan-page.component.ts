import { Component, OnInit } from '@angular/core';
import { PlanApiService } from 'src/app/services/plan-api.service';

@Component({
  selector: 'app-start-plan',
  templateUrl: './start-plan-page.component.html',
  styleUrls: ['./start-plan-page.component.sass']
})
export class StartPlanPageComponent implements OnInit {

  constructor(private planApi: PlanApiService) { }

  startPlan = () => {
    this.planApi.startPlan();
  }

  ngOnInit() {
  }

}
