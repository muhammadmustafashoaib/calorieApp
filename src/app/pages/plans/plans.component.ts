import { Component } from '@angular/core';
interface Plan {
  name: string;
  description: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  meals: string[];
}
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
plans: Plan[] = [
    {
      name: 'Weight Loss',
      description: 'Low calorie plan designed for gradual fat loss.',
      calories: 1500,
      carbs: 150,
      protein: 120,
      fat: 40,
      meals: ['Oatmeal with berries', 'Grilled chicken salad', 'Steamed vegetables & salmon']
    },
    {
      name: 'Muscle Gain',
      description: 'High protein, calorie surplus for building muscle.',
      calories: 2500,
      carbs: 300,
      protein: 180,
      fat: 70,
      meals: ['Eggs & toast', 'Rice & chicken breast', 'Beef stir fry with vegetables']
    },
    {
      name: 'Balanced Maintenance',
      description: 'Maintain weight with a balanced macronutrient split.',
      calories: 2000,
      carbs: 220,
      protein: 140,
      fat: 60,
      meals: ['Greek yogurt & fruit', 'Turkey sandwich', 'Grilled fish & quinoa']
    }
  ];
}
