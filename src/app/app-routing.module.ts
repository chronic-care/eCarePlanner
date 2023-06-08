import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HealthAndSocialConcernsComponent} from './health-and-social-concerns/health-and-social-concerns.component';
import { GoalsComponent } from './goals/goals.component';
import { MaintenanceAndInterventionsComponent } from './maintenance-and-interventions/maintenance-and-interventions.component';
import { HealthStatusComponent } from './health-status/health-status.component';
import { CareTeamComponent } from './care-team/care-team.component';
import {HealthGuard} from './health.guard';

const routes: Routes = [
  { path: 'health', component:  HealthAndSocialConcernsComponent},
  { path: 'goals', component:  GoalsComponent},
  { path: 'maint', component: MaintenanceAndInterventionsComponent},
  { path: 'status', component: HealthStatusComponent},
  { path: 'care', component: CareTeamComponent},
  { path: '', redirectTo: 'goals', pathMatch: 'full',  canActivate: [HealthGuard] }
];
export const appRouting = RouterModule.forRoot(routes, {enableTracing: false});
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
