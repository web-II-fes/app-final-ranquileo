import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaqueteComponent} from './componentes/paquete/paquete.component';

const routes: Routes = [
  { path: 'pedido-component', component: PaqueteComponent},
  {path: '', redirectTo: 'pedido-component', pathMatch: 'full'},
  {path: '**', component: PaqueteComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
