import { AuthGuard } from './guards/auth.guard';
import { AreaAdmComponent } from './area-adm/area-adm.component';
import { AreaPontoComponent } from './area-ponto/area-ponto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaLoginComponent } from './area-login/area-login.component';

const routes: Routes = [
  {
    path: '',
    component: AreaLoginComponent,
  },
  {
    path: 'ponto',
    component: AreaPontoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'adm',
    component: AreaAdmComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
