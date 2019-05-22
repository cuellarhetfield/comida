import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { BebidasComponent } from './bebidas/bebidas.component';

const routes: Routes =
[
  { path: 'principal', component: PrincipalComponent},
  { path: 'alimentos', component: AlimentosComponent},
  { path: 'bebidas', component: BebidasComponent},
  { path: '**', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
