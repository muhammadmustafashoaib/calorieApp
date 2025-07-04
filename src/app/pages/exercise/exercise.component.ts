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

editingIndex: number | null = null;

get calculatedCalories(): number {
  if (!this.selectedExercise || !this.duration) return 0;
  return Math.round(
    (this.selectedExercise.caloriesPer30Min * this.duration) / 30
  );
}

logExercise() {
  if (!this.selectedExercise || !this.duration) return;

  const exerciseEntry = {
    name: this.selectedExercise.name,
    duration: this.duration,
    calories: this.calculatedCalories
  };

  if (this.editingIndex !== null) {
    // Edit existing
    this.loggedExercises[this.editingIndex] = exerciseEntry;
    this.editingIndex = null;
  } else {
    // Add new
    this.loggedExercises.push(exerciseEntry);
  }

  this.selectedExercise = null;
  this.duration = null;
}

editExercise(index: number) {
  const ex = this.loggedExercises[index];
  this.editingIndex = index;

  this.selectedExercise = this.exercisesList.find(e => e.name === ex.name) || null;
  this.duration = ex.duration;
}

removeExercise(index: number) {
  this.loggedExercises.splice(index, 1);

  if (this.editingIndex === index) {
    this.selectedExercise = null;
    this.duration = null;
    this.editingIndex = null;
  }
}

get totalCalories(): number {
  return this.loggedExercises.reduce((acc, e) => acc + e.calories, 0);
}

get totalTime(): number {
  return this.loggedExercises.reduce((acc, e) => acc + e.duration, 0);
}

}
