import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BMIComponent {
weight: number | null = null;
weightUnit: 'kg' | 'lb' = 'kg';

heightCm: number | null = null;
heightFt: number | null = null;
heightIn: number | null = null;
heightUnit: 'cm' | 'ft' = 'cm';

get bmi(): number | null {
  let weightKg: number;
  let heightM: number;

  if (!this.weight || (!this.heightCm && !this.heightFt)) {
    return null;
  }

  // Convert weight
  if (this.weightUnit === 'kg') {
    weightKg = this.weight;
  } else {
    weightKg = this.weight * 0.453592; // lbs → kg
  }

  // Convert height
  if (this.heightUnit === 'cm') {
    heightM = (this.heightCm ?? 0) / 100;
  } else {
    const totalInches = (this.heightFt ?? 0) * 12 + (this.heightIn ?? 0);
    heightM = totalInches * 0.0254;
  }

  if (heightM <= 0) return null;

  const bmiValue = weightKg / (heightM * heightM);
  return bmiValue;
}

}
