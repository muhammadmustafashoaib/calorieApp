import { Injectable } from '@angular/core';
import { FoodEntry } from '../models/food-entry.model';

@Injectable({ providedIn: 'root' })
export class FoodService {
  private foodEntries: FoodEntry[] = [];

  addFood(entry: FoodEntry) {
    this.foodEntries.push(entry);
  }

  getTodayEntries(): FoodEntry[] {
    const today = new Date().toISOString().split('T')[0];
    return this.foodEntries.filter(e => e.date === today);
  }

  getTotalCaloriesToday(): number {
    return this.getTodayEntries().reduce((sum, entry) => sum + entry.calories, 0);
  }
}
