import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ChartData, ChartOptions, ChartType } from 'chart.js';


interface Food {
  name: string;
  carbs: number;
  protein: number;
  fat: number;
  calories: number;
}
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})

export class DiaryComponent {
 
   selectedDate: string = '';
  selectedCategoryIndex: number = 0;
  selectedFoodFromList: string = '';

  categories = [
    { name: 'Breakfast', expanded: false, foods: [] as Food[] },
    { name: 'Lunch', expanded: false, foods: [] as Food[] },
    { name: 'Dinner', expanded: false, foods: [] as Food[] },
    { name: 'Snacks', expanded: false, foods: [] as Food[] }
  ];

  foodList: Food[] = [
    { name: 'Apple', carbs: 25, protein: 0, fat: 0, calories: 95 },
    { name: 'Banana', carbs: 27, protein: 1, fat: 0, calories: 105 },
    { name: 'Rice', carbs: 45, protein: 4, fat: 0, calories: 200 },
    { name: 'Chicken Breast', carbs: 0, protein: 31, fat: 3, calories: 165 },
    { name: 'Salmon', carbs: 0, protein: 22, fat: 13, calories: 208 },
    { name: 'Egg', carbs: 1, protein: 6, fat: 5, calories: 78 },
    { name: 'Bread', carbs: 15, protein: 3, fat: 1, calories: 80 },
    { name: 'Milk', carbs: 12, protein: 8, fat: 2, calories: 103 },
    { name: 'Oats', carbs: 27, protein: 5, fat: 3, calories: 150 },
    { name: 'Beef', carbs: 0, protein: 26, fat: 20, calories: 250 },
    { name: 'Potato', carbs: 30, protein: 3, fat: 0, calories: 130 },
    { name: 'Pasta', carbs: 43, protein: 8, fat: 1, calories: 220 },
    { name: 'Cheese', carbs: 1, protein: 7, fat: 9, calories: 110 },
    { name: 'Avocado', carbs: 9, protein: 2, fat: 15, calories: 160 },
    // Add more as needed
  ];

  energySummary = {
    consumed: 0,
    expenditure: 2000,
    remaining: 2000
  };

  toggleCategory(index: number) {
    this.categories[index].expanded = !this.categories[index].expanded;
  }

  addFoodToCategory() {
    if (!this.selectedFoodFromList) return;

    const category = this.categories[this.selectedCategoryIndex];
    const foodObj = this.foodList.find(f => f.name === this.selectedFoodFromList);

    if (foodObj) {
      category.foods.push({ ...foodObj });

      this.energySummary.consumed += foodObj.calories;
      this.energySummary.remaining = this.energySummary.expenditure - this.energySummary.consumed;
    }

    this.selectedFoodFromList = '';
  }
}
