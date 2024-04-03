import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { ConvergenciaComponent } from './convergencia/convergencia.component'

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'convergencia', component: ConvergenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
