import { AreaAutenticadaComponent } from './area-autenticada/area-autenticada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaLoginComponent } from './area-login/area-login.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'area-login'
  },
  {
    path: 'area-autenticada',
    loadChildren: () => import('./area-autenticada/area-autenticada.module').then(x => x.AreaAutenticadaModule)
  },
  {
    path: 'area-login',
    loadChildren: () => import('./area-login/area-login.module').then(x => x.AreaLoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
