import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { AddfoodComponent } from './pages/addfood/addfood.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { TrendsComponent } from './pages/trends/trends.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { BMIComponent } from './pages/bmi/bmi.component';
import { NotesComponent } from './pages/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DiaryComponent,
    AddfoodComponent,
    ProfileComponent,
    SupportComponent,
    AboutComponent,
    TrendsComponent,
    FoodsComponent,
    PlansComponent,
    ExerciseComponent,
    BMIComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  FormsModule,
  NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
