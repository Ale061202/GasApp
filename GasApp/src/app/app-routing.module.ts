import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasolineraComponent } from './components/gasolinera/gasolinera.component';

const routes: Routes = [
  {path: 'gasolinera', component: GasolineraComponent},
  {path: '',redirectTo:'gasolinera',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }