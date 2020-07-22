import { AreaAutenticadaComponent } from './area-autenticada/area-autenticada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaLoginComponent } from './area-login/area-login.component';
import { PrincipalComponent } from './area-autenticada/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: AreaLoginComponent,
    outlet: 'root',
  },
  {
    path: 'area-autenticada',
    component: AreaAutenticadaComponent,
  },
  {
    path: 'area-autenticada/principal',
    component: PrincipalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
