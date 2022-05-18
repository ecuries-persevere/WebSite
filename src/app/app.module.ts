import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TeamComponent } from './pages/team/team.component';
import { InstallationsComponent } from './pages/installations/installations.component';
import { WorkComponent } from './pages/prestations/work/work.component';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { StagesComponent } from './pages/prestations/stages/stages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    TeamComponent,
    InstallationsComponent,
    WorkComponent,
    PrestationsComponent,
    StagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
