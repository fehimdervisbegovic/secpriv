import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanApiService {

  constructor() { }

  startPlan = () => {
    console.log(`Start enterprise plan...`);
  }
}
