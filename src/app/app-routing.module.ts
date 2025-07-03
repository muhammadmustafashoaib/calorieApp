import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddfoodComponent } from './pages/addfood/addfood.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';
import { TrendsComponent } from './pages/trends/trends.component';
import { FoodsComponent } from './pages/foods/foods.component';
import { PlansComponent } from './pages/plans/plans.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-food', component: AddfoodComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'profile', component: ProfileComponent },
    { path: 'support', component:SupportComponent }
  ,{path:'about', component:AboutComponent},
  {path:'trends', component: TrendsComponent},
  {path:'foods', component:FoodsComponent},
  {path:'plans', component:PlansComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
