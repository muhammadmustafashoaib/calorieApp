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

  results: {
    idealWeightKg: number;
    calories: number;
    bmi: number;
    bmiCategory: string;
    recommendation: string;
    recommendationColor: 'green' | 'red' | 'yellow';
  } | null = null;

  clearResults() {
    this.results = null;
  }

  calculate() {
    let heightInMeters: number;
    let heightInInches: number;

    if (this.heightCm) {
      heightInMeters = +this.heightCm / 100;
      heightInInches = +this.heightCm / 2.54;
    } else if (this.heightFt !== '' || this.heightInch !== '') {
      heightInInches = (+this.heightFt || 0) * 12 + (+this.heightInch || 0);
      heightInMeters = heightInInches * 0.0254;
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

    const bmi = +(currentWeightKg / (heightInMeters ** 2)).toFixed(1);

    let bmiCategory = '';
    if (bmi < 18.5) bmiCategory = 'Underweight';
    else if (bmi < 24.9) bmiCategory = 'Normal weight';
    else if (bmi < 29.9) bmiCategory = 'Overweight';
    else bmiCategory = 'Obese';

    const calories = Math.round(idealWeightKg * 25 * 1.1);

    let recommendation = '';
    let recommendationColor: 'green' | 'red' | 'yellow' = 'yellow';

    if (currentWeightKg < idealWeightKg) {
      recommendation = 'Increase your calorie intake.';
      recommendationColor = 'green';
    } else if (currentWeightKg > idealWeightKg) {
      recommendation = 'Decrease your calorie intake.';
      recommendationColor = 'red';
    } else {
      recommendation = 'Maintain your current calorie intake.';
      recommendationColor = 'yellow';
    }

    this.results = {
      idealWeightKg,
      calories,
      bmi,
      bmiCategory,
      recommendation,
      recommendationColor
    };
  }
}
