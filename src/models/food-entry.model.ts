export interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  date: string; // ISO format
  quantity: number; // grams or servings
}