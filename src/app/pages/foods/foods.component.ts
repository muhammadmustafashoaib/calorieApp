import { Component } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {
  searchTerm: string = '';

  foodOptions = [
    { name: 'Boiled Egg', calories: 78, carbs: 0.6, protein: 6.3, fat: 5.3, fiber: 0 },
    { name: 'Grilled Chicken Breast (100g)', calories: 165, carbs: 0, protein: 31, fat: 3.6, fiber: 0 },
    { name: 'Apple (1 medium)', calories: 95, carbs: 25, protein: 0.5, fat: 0.3, fiber: 4.4 },
    { name: 'Brown Rice (1 cup)', calories: 216, carbs: 44.8, protein: 5, fat: 1.8, fiber: 3.5 },
    { name: 'Almonds (10 pcs)', calories: 70, carbs: 2.5, protein: 2.6, fat: 6.1, fiber: 1.4 },
    { name: 'Banana (1 medium)', calories: 105, carbs: 27, protein: 1.3, fat: 0.3, fiber: 3.1 },
    { name: 'Oatmeal (1 cup)', calories: 154, carbs: 27, protein: 6, fat: 3.2, fiber: 4 },
    { name: 'Whole Wheat Bread (1 slice)', calories: 82, carbs: 14, protein: 4, fat: 1, fiber: 2 },
    { name: 'Greek Yogurt (150g)', calories: 100, carbs: 6, protein: 10, fat: 0.7, fiber: 0 },
    { name: 'Avocado (1/2 medium)', calories: 120, carbs: 6, protein: 1.5, fat: 11, fiber: 5 }
  ];

  get filteredFoods() {
    return this.foodOptions.filter(food =>
      food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
