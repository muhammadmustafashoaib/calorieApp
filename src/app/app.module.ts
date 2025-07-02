import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { AddfoodComponent } from './pages/addfood/addfood.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgChartsModule } from 'ng2-charts';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DiaryComponent,
    AddfoodComponent,
    ProfileComponent,
    SupportComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule  // ✅ Correct for ng2-charts v4+
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
