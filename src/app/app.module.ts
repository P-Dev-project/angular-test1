import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HeaderComponent } from './utils/header/header.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GardesComponent } from './pages/home/gardes/gardes.component';
import { AfisComponent } from './pages/home/afis/afis.component';
import { MoyensTransportAdministratifsComponent } from './pages/home/moyens-transport-administratifs/moyens-transport-administratifs.component';
import { ArmesComponent } from './pages/home/armes/armes.component';
import { EmployesSiegeComponent } from './pages/home/employes-siege/employes-siege.component';
import { CorrespondantsEtrangerComponent } from './pages/home/correspondants-etranger/correspondants-etranger.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    GardesComponent,
    AfisComponent,
    MoyensTransportAdministratifsComponent,
    ArmesComponent,
    EmployesSiegeComponent,
    CorrespondantsEtrangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
