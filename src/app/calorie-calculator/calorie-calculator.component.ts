import { Component } from '@angular/core';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss']
})
export class CalorieCalculatorComponent {
   gender: 'male' | 'female' = 'male';
  heightCm: number | '' = '';
  heightFt: number | '' = '';
  heightInch: number | '' = '';
  weightKg: number | '' = '';
  weightLbs: number | '' = '';

  results: { idealWeightKg: number; calories: number } | null = null;

  clearResults() {
    this.results = null;
  }

  calculate() {
    let heightInInches: number;

    if (this.heightCm) {
      heightInInches = +this.heightCm / 2.54;
    } else if (this.heightFt !== '' || this.heightInch !== '') {
      heightInInches = (+this.heightFt || 0) * 12 + (+this.heightInch || 0);
    } else {
      return;
    }

    let currentWeightKg: number;
    if (this.weightKg) {
      currentWeightKg = +this.weightKg;
    } else if (this.weightLbs) {
      currentWeightKg = +this.weightLbs * 0.453592;
    } else {
      currentWeightKg = 0;
    }

    const base = this.gender === 'male' ? 50 : 45.5;
    const inchesOver5ft = Math.max(heightInInches - 60, 0);
    const idealWeightKg = +(base + (inchesOver5ft * 2.3)).toFixed(1);
    const calories = Math.round(idealWeightKg * 25);

    this.results = { idealWeightKg, calories };
  }
}
