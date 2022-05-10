import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { InstallationsComponent } from './pages/installations/installations.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { WorkComponent } from './pages/work/work.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  {
    path: "prestations",
    component: PrestationsComponent,
    children: [
      {path: "work", component: WorkComponent}
    ]
  },
  { path: "team", component: TeamComponent },
  { path: "installations", component: InstallationsComponent },
  { path: "philo", component: LandingComponent },
  { path: "withus", component: LandingComponent },
  { path: "contact", component: LandingComponent },
  { path: "landing", component: LandingComponent },
  { path: '**', redirectTo: "landing", pathMatch: "full"}
];



const routerOptions: ExtraOptions = {
  useHash: true
  ,anchorScrolling: 'enabled'
  ,scrollPositionRestoration: 'enabled'
  // ,scrollOffset: [0, 64]
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
