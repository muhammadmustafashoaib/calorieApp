import { Component } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {
  searchTerm: string = '';

  categories = [
    {
      name: 'Vegetables',
      icon: '🥦',
      items: [
        { name: 'Spinach (1 cup)', calories: 7, carbs: 1, protein: 1, fat: 0, fiber: 0.7 },
        { name: 'Carrot (1 medium)', calories: 25, carbs: 6, protein: 0.5, fat: 0.1, fiber: 1.7 },
        { name: 'Broccoli (1 cup)', calories: 55, carbs: 11, protein: 4, fat: 0.5, fiber: 5 },
        { name: 'Cabbage (1 cup)', calories: 22, carbs: 5, protein: 1, fat: 0.1, fiber: 2 },
        { name: 'Bell Pepper (1 cup)', calories: 30, carbs: 7, protein: 1, fat: 0.3, fiber: 2 },
        { name: 'Cauliflower (1 cup)', calories: 25, carbs: 5, protein: 2, fat: 0.1, fiber: 2 },
        { name: 'Green Beans (1 cup)', calories: 35, carbs: 8, protein: 2, fat: 0.1, fiber: 4 },
        { name: 'Zucchini (1 cup)', calories: 20, carbs: 4, protein: 1, fat: 0.3, fiber: 1 }
      ]
    },
    {
      name: 'Proteins',
      icon: '🍗',
      items: [
        { name: 'Boiled Egg (1)', calories: 78, carbs: 0.6, protein: 6, fat: 5, fiber: 0 },
        { name: 'Chicken Breast (100g)', calories: 165, carbs: 0, protein: 31, fat: 3.6, fiber: 0 },
        { name: 'Tofu (100g)', calories: 76, carbs: 2, protein: 8, fat: 4.8, fiber: 0.3 },
        { name: 'Paneer (50g)', calories: 145, carbs: 2, protein: 8, fat: 12, fiber: 0 },
        { name: 'Lentils (1 cup cooked)', calories: 230, carbs: 40, protein: 18, fat: 1, fiber: 15 },
        { name: 'Greek Yogurt (100g)', calories: 59, carbs: 3.6, protein: 10, fat: 0.4, fiber: 0 },
        { name: 'Beef Mince (100g)', calories: 250, carbs: 0, protein: 26, fat: 18, fiber: 0 },
        { name: 'Fish - Salmon (100g)', calories: 208, carbs: 0, protein: 20, fat: 13, fiber: 0 }
      ]
    },
    {
      name: 'Pakistani Mains',
      icon: '🍛',
      items: [
        { name: 'Chicken Biryani (1 cup)', calories: 290, carbs: 35, protein: 14, fat: 12, fiber: 2 },
        { name: 'Daal Chawal (1 cup)', calories: 320, carbs: 45, protein: 12, fat: 6, fiber: 8 },
        { name: 'Roti (1 medium)', calories: 120, carbs: 20, protein: 3, fat: 3, fiber: 2 },
        { name: 'Paratha (1)', calories: 250, carbs: 30, protein: 5, fat: 15, fiber: 2 },
        { name: 'Chicken Korma (1 serving)', calories: 320, carbs: 6, protein: 25, fat: 20, fiber: 1 },
        { name: 'Aloo Gobi (1 cup)', calories: 180, carbs: 15, protein: 4, fat: 8, fiber: 4 },
        { name: 'Chana Masala (1 cup)', calories: 270, carbs: 45, protein: 15, fat: 5, fiber: 12 },
        { name: 'Nihari (1 serving)', calories: 350, carbs: 5, protein: 30, fat: 25, fiber: 0.5 },
        { name: 'Beef Pulao (1 cup)', calories: 300, carbs: 40, protein: 16, fat: 10, fiber: 2 }
      ]
    },
    {
      name: 'Snacks & Sweets',
      icon: '🍬',
      items: [
        { name: 'Gulab Jamun (1)', calories: 150, carbs: 25, protein: 2, fat: 6, fiber: 0.2 },
        { name: 'Fruit Chaat (1 bowl)', calories: 120, carbs: 28, protein: 1, fat: 0.5, fiber: 4 },
        { name: 'Chana Chaat (1 cup)', calories: 180, carbs: 22, protein: 8, fat: 5, fiber: 6 },
        { name: 'Samosa (1)', calories: 250, carbs: 25, protein: 5, fat: 15, fiber: 3 },
        { name: 'Dates (2 pieces)', calories: 133, carbs: 36, protein: 1, fat: 0, fiber: 3 },
        { name: 'Dark Chocolate (30g)', calories: 170, carbs: 13, protein: 2, fat: 12, fiber: 3 },
        { name: 'Kheer (1 cup)', calories: 215, carbs: 35, protein: 5, fat: 6, fiber: 1 },
        { name: 'Pakora (100g)', calories: 300, carbs: 30, protein: 6, fat: 18, fiber: 4 }
      ]
    }
  ];

  get filteredFoods() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return [];

    return this.categories.flatMap(category =>
      category.items.filter(food =>
        food.name.toLowerCase().includes(term)
      )
    );
  }
}