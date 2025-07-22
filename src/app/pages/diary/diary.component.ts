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
    { name: 'Breakfast', expanded: false, foods: [''] },
    { name: 'Lunch', expanded: false, foods: [''] },
    { name: 'Dinner', expanded: false, foods: [''] },
    { name: 'Snacks', expanded: false, foods: [''] }
  ];

  keys: NutrientKey[] = ['energy', 'protein', 'carbs', 'fat'];

  energySummary = {
    consumed: 0,
    expenditure: '',
    remaining: ''
  };

  targets: Record<NutrientKey,any> = {
    energy: null,
    protein: null,
    carbs: null,
    fat: null
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
