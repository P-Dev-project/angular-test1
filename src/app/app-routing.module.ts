import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home/home-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {NotFoundComponent} from './utils/not-found/not-found.component';
import {EmployesSiegeComponent} from './pages/home/employes-siege/employes-siege.component';
import {CorrespondantsEtrangerComponent} from './pages/home/correspondants-etranger/correspondants-etranger.component';
import {GardesComponent} from './pages/home/gardes/gardes.component';
import {AfisComponent} from './pages/home/afis/afis.component';
import {MoyensTransportAdministratifsComponent} from './pages/home/moyens-transport-administratifs/moyens-transport-administratifs.component';
import {ArmesComponent} from './pages/home/armes/armes.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'employes-siege',
        component: EmployesSiegeComponent,
      },
      {
        path: 'correspondants-etranger',
        component: CorrespondantsEtrangerComponent,
      },
      {
        path: 'gardes',
        component: GardesComponent,
      },
      {
        path: 'afis',
        component: AfisComponent,
      },
      {
        path: 'moyens-transport-administratif',
        component: MoyensTransportAdministratifsComponent,
      },
      {
        path: 'armes',
        component: ArmesComponent,
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
