import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
 exercisesList = [
    { name: 'Running (6 mph)', caloriesPer30Min: 300 },
    { name: 'Brisk walking', caloriesPer30Min: 150 },
    { name: 'Jump rope', caloriesPer30Min: 350 },
    { name: 'Cycling (moderate)', caloriesPer30Min: 250 },
    { name: 'Swimming (freestyle)', caloriesPer30Min: 250 },
    { name: 'Yoga', caloriesPer30Min: 120 },
    { name: 'Aerobics (high impact)', caloriesPer30Min: 250 },
    { name: 'Weight training', caloriesPer30Min: 130 },
    { name: 'Hiking', caloriesPer30Min: 180 },
    { name: 'Dancing (fast)', caloriesPer30Min: 200 }
  ];

  durationsList = [15, 30, 45, 60];

  selectedExercise: any = null;
  duration: number | null = null;

  loggedExercises: {
    name: string;
    duration: number;
    calories: number;
  }[] = [];

  get calculatedCalories(): number {
    if (!this.selectedExercise || !this.duration) return 0;
    return Math.round(
      (this.selectedExercise.caloriesPer30Min * this.duration) / 30
    );
  }

  logExercise() {
    if (!this.selectedExercise || !this.duration) return;

    this.loggedExercises.push({
      name: this.selectedExercise.name,
      duration: this.duration,
      calories: this.calculatedCalories
    });

    this.selectedExercise = null;
    this.duration = null;
  }

  get totalCalories(): number {
    return this.loggedExercises.reduce((acc, e) => acc + e.calories, 0);
  }

  get totalTime(): number {
    return this.loggedExercises.reduce((acc, e) => acc + e.duration, 0);
  }
}
