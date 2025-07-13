import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
type NutrientKey = 'energy' | 'protein' | 'carbs' | 'fat';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})

export class DiaryComponent {
  newFood = '';
  selectedCategoryIndex: number = 0;

  categories = [
    { name: 'Uncategorized', expanded: false, foods: ['Example Food 1', 'Example Food 2'] },
    { name: 'Breakfast', expanded: false, foods: ['Eggs', 'Toast'] },
    { name: 'Lunch', expanded: false, foods: ['Chicken Salad', 'Rice'] },
    { name: 'Dinner', expanded: false, foods: ['Steak', 'Vegetables'] },
    { name: 'Snacks', expanded: false, foods: ['Fruit', 'Nuts'] }
  ];

  keys: NutrientKey[] = ['energy', 'protein', 'carbs', 'fat'];

  energySummary = {
    consumed: 0,
    expenditure: 1778,
    remaining: 1903
  };

  targets: Record<NutrientKey, number> = {
    energy: 1903,
    protein: 118.9,
    carbs: 214.1,
    fat: 63.4
  };

  consumed: Record<NutrientKey, number> = {
    energy: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  };

  toggleCategory(index: number) {
    this.categories[index].expanded = !this.categories[index].expanded;
  }

  addFood() {
    if (this.newFood.trim()) {
      this.categories[this.selectedCategoryIndex].foods.push(this.newFood.trim());
      this.newFood = '';
    }
  }
}
