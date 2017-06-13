/**
 * Created by KeilCarpenter on 13/06/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from '../components/heroes/heroes.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {HeroDetailComponent} from "../components/hero-detail/hero-detail.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'detail/:id', component: HeroDetailComponent}
];

export const routes = RouterModule.forRoot(APP_ROUTES);
