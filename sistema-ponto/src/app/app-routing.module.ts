import { AreaAutenticadaComponent } from './area-autenticada/area-autenticada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaLoginComponent } from './area-login/area-login.component';

const routes: Routes = [
  {
    path: '',
    component: AreaLoginComponent,
  },
  {
    path: 'area-autenticada',
    component: AreaAutenticadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
