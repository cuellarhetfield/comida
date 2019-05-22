import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[
  { path: 'principal', component: PrincipalComponent},
  { path: 'alimentos', component: AlimentosComponent},
  { path: 'bebidas', component: BebidasComponent},
  { path: '**', component: PrincipalComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }
