import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent {
   selectedFoodName: string = '';
  selectedFood: any = null;
  foodEntries: any[] = [];

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
    { name: 'Avocado (1/2 medium)', calories: 120, carbs: 6, protein: 1.5, fat: 11, fiber: 5 },
    { name: 'Broccoli (1 cup)', calories: 55, carbs: 11, protein: 3.7, fat: 0.6, fiber: 5.1 },
    { name: 'Salmon (100g)', calories: 208, carbs: 0, protein: 20, fat: 13, fiber: 0 },
    { name: 'Peanut Butter (1 tbsp)', calories: 94, carbs: 3.2, protein: 4, fat: 8, fiber: 1 },
    { name: 'Milk (1 cup, 2%)', calories: 122, carbs: 12, protein: 8, fat: 5, fiber: 0 },
    { name: 'Carrot (1 medium)', calories: 25, carbs: 6, protein: 0.6, fat: 0.1, fiber: 1.7 },
    { name: 'Spinach (1 cup cooked)', calories: 41, carbs: 6.7, protein: 5.4, fat: 0.5, fiber: 4.3 },
    { name: 'Orange (1 medium)', calories: 62, carbs: 15.4, protein: 1.2, fat: 0.2, fiber: 3.1 },
    { name: 'Cucumber (1 cup)', calories: 16, carbs: 4, protein: 0.7, fat: 0.1, fiber: 0.5 },
    { name: 'Tofu (100g)', calories: 76, carbs: 1.9, protein: 8, fat: 4.8, fiber: 0.3 },
    { name: 'Sweet Potato (1 medium)', calories: 103, carbs: 24, protein: 2.3, fat: 0.2, fiber: 3.8 }
  ];

  // Chart Setup
chartType: ChartType = 'doughnut';

  chartData: ChartData<'doughnut'> = {
  labels: ['Carbs', 'Protein', 'Fat'],
  datasets: [
    {
      data: [0, 0, 0],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      label: 'Macros Breakdown'
    }
  ]
};


  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };

  onFoodSelect() {
    this.selectedFood = this.foodOptions.find(food => food.name === this.selectedFoodName);
  }

  addSelectedFood() {
    if (this.selectedFood) {
      this.foodEntries.push({ ...this.selectedFood });
      this.selectedFood = null;
      this.selectedFoodName = '';
      this.updateChartData();
    }
  }

  removeFood(index: number) {
    this.foodEntries.splice(index, 1);
    this.updateChartData();
  }

  getTotal(key: 'calories' | 'carbs' | 'protein' | 'fat' | 'fiber'): number {
    return this.foodEntries.reduce((sum, food) => sum + (food[key] || 0), 0);
  }

  updateChartData() {
    const carbs = this.getTotal('carbs');
    const protein = this.getTotal('protein');
    const fat = this.getTotal('fat');

    this.chartData.datasets[0].data = [carbs, protein, fat];
  }
}
