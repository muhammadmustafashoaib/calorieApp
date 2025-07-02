import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartTypeRegistry, CoreChartOptions, DatasetChartOptions, ElementChartOptions, PluginChartOptions, ScaleChartOptions } from 'chart.js/dist/types/index';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import { FoodEntry } from 'src/models/food-entry.model';
import { FoodService } from 'src/services/food.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalCalories = 0;
  barChartType: ChartType = 'bar';

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
    datasets: [
      {
        data: [0, 0, 0, 0],
        label: 'Calories by Meal',
        backgroundColor: '#4caf50'
      }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Calorie Breakdown by Meal' }
    }
  };

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    const entries = this.foodService.getTodayEntries();
    this.totalCalories = this.foodService.getTotalCaloriesToday();

    const meals = ['breakfast', 'lunch', 'dinner', 'snack'];
    const caloriesPerMeal = meals.map(meal =>
      entries
        .filter(e => e.mealType === meal)
        .reduce((sum, e) => sum + e.calories, 0)
    );

    this.barChartData.datasets[0].data = caloriesPerMeal;
  }
}