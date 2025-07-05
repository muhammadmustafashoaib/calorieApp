import { Component } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {
  searchTerm: string = '';

 vegetables = [
  { name: 'Broccoli (1 cup)', calories: 55, carbs: 11, protein: 4, fat: 0.5, fiber: 5 },
  { name: 'Carrots (1 cup)', calories: 50, carbs: 12, protein: 1, fat: 0.3, fiber: 3 },
  { name: 'Spinach (1 cup cooked)', calories: 41, carbs: 7, protein: 5, fat: 0.5, fiber: 4 },
  { name: 'Bhindi (Okra, 1 cup)', calories: 90, carbs: 12, protein: 2, fat: 4, fiber: 3 },
  { name: 'Saag (1 cup)', calories: 120, carbs: 8, protein: 3, fat: 8, fiber: 2 }
];
 fruits = [
  { name: 'Apple (1 medium)', calories: 95, carbs: 25, protein: 0.5, fat: 0.3, fiber: 4.4 },
  { name: 'Banana (1 medium)', calories: 105, carbs: 27, protein: 1.3, fat: 0.3, fiber: 3.1 },
  { name: 'Orange (1 medium)', calories: 62, carbs: 15, protein: 1.2, fat: 0.2, fiber: 3 },
  { name: 'Mango (1 medium)', calories: 202, carbs: 50, protein: 1.4, fat: 0.6, fiber: 5 },
  { name: 'Strawberries (1 cup)', calories: 49, carbs: 12, protein: 1, fat: 0.5, fiber: 3 },
  { name: 'Watermelon (1 cup)', calories: 46, carbs: 12, protein: 0.9, fat: 0.2, fiber: 0.6 },
  { name: 'Dates (3 pieces)', calories: 70, carbs: 18, protein: 0.6, fat: 0, fiber: 2 },
  { name: 'Avocado (1/2 medium)', calories: 120, carbs: 6, protein: 1.5, fat: 11, fiber: 5 }
];
 proteins = [
  { name: 'Boiled Egg', calories: 78, carbs: 0.6, protein: 6.3, fat: 5.3, fiber: 0 },
  { name: 'Grilled Chicken Breast (100g)', calories: 165, carbs: 0, protein: 31, fat: 3.6, fiber: 0 },
  { name: 'Beef Kebab (1 stick)', calories: 180, carbs: 2, protein: 20, fat: 10, fiber: 0 },
  { name: 'Salmon (100g)', calories: 206, carbs: 0, protein: 22, fat: 13, fiber: 0 },
  { name: 'Tuna (canned in water)', calories: 132, carbs: 0, protein: 28, fat: 1, fiber: 0 },
  { name: 'Greek Yogurt (150g)', calories: 100, carbs: 6, protein: 10, fat: 0.7, fiber: 0 },
  { name: 'Cottage Cheese (100g)', calories: 98, carbs: 3, protein: 11, fat: 4, fiber: 0 },
  { name: 'Milk (1 cup, whole)', calories: 150, carbs: 12, protein: 8, fat: 8, fiber: 0 },
  { name: 'Karahi Chicken (1 serving)', calories: 300, carbs: 4, protein: 28, fat: 18, fiber: 1 },
  { name: 'Nihari (1 serving)', calories: 400, carbs: 6, protein: 25, fat: 30, fiber: 0 }
];

 pakistaniMain = [
  { name: 'Chicken Biryani (1 plate)', calories: 350, carbs: 55, protein: 15, fat: 10, fiber: 2 },
  { name: 'Chapati (1 medium)', calories: 104, carbs: 22, protein: 3, fat: 1, fiber: 2 },
  { name: 'Dal Chawal (1 plate)', calories: 300, carbs: 52, protein: 12, fat: 5, fiber: 8 },
  { name: 'Aloo Paratha (1 piece)', calories: 280, carbs: 45, protein: 6, fat: 10, fiber: 3 },
  { name: 'Chana Masala (1 cup)', calories: 270, carbs: 45, protein: 12, fat: 6, fiber: 10 },
  { name: 'Haleem (1 bowl)', calories: 320, carbs: 35, protein: 18, fat: 12, fiber: 6 },
  { name: 'Pulao (1 plate)', calories: 340, carbs: 50, protein: 10, fat: 10, fiber: 2 }
];

 snacksAndSweets = [
  { name: 'Almonds (10 pcs)', calories: 70, carbs: 2.5, protein: 2.6, fat: 6.1, fiber: 1.4 },
  { name: 'Pakora (4 pieces)', calories: 200, carbs: 20, protein: 5, fat: 10, fiber: 2 },
  { name: 'Samosa (1 piece)', calories: 130, carbs: 15, protein: 3, fat: 7, fiber: 1 },
  { name: 'Sheer Khurma (1 small bowl)', calories: 250, carbs: 40, protein: 5, fat: 8, fiber: 1 },
  { name: 'Zarda (1 plate)', calories: 350, carbs: 75, protein: 5, fat: 4, fiber: 1 },
  { name: 'Chaat (1 plate)', calories: 200, carbs: 35, protein: 6, fat: 4, fiber: 5 },
  { name: 'Dahi Bhalla (2 pieces)', calories: 150, carbs: 20, protein: 6, fat: 4, fiber: 2 },
  { name: 'Dark Chocolate (1 square)', calories: 50, carbs: 5, protein: 0.5, fat: 3, fiber: 1 },
  { name: 'Popcorn (2 cups, air-popped)', calories: 62, carbs: 12, protein: 2, fat: 0.5, fiber: 2 }
];
 drinks = [
  { name: 'Lassi (1 glass)', calories: 180, carbs: 12, protein: 6, fat: 8, fiber: 0 },
  { name: 'Green Tea (unsweetened)', calories: 2, carbs: 0, protein: 0, fat: 0, fiber: 0 }
];

 foodOptions = [
  ...this.vegetables,
  ...this.fruits,
  ...this.proteins,
  ...this.pakistaniMain,
  ...this.snacksAndSweets,
  ...this.drinks
];


  get filteredFoods() {
    return this.foodOptions.filter(food =>
      food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
