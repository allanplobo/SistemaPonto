import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'area-login',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'area-autenticada',
    loadChildren: () =>
      import('./area-autenticada/area-autenticada.module').then(
        (x) => x.AreaAutenticadaModule
      ),
  },
  {
    path: 'area-login',
    loadChildren: () =>
      import('./area-login/area-login.module').then((x) => x.AreaLoginModule),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
