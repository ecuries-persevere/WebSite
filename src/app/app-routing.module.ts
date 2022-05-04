import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "team", component: LandingComponent },
  { path: "installations", component: LandingComponent },
  { path: "prestations", component: LandingComponent },
  { path: "philo", component: LandingComponent },
  { path: "withus", component: LandingComponent },
  { path: "contact", component: LandingComponent },
  { path: "landing", component: LandingComponent },
  { path: '**', redirectTo: "landing", pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      // scrollOffset: [0, 64],
      useHash: true // [x, y]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
