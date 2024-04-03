import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core'

import { RouterModule } from '@angular/router'
import { PoModule } from '@po-ui/ng-components'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ConvergenciaComponent } from './convergencia/convergencia.component'

@NgModule({
  declarations: [
    AppComponent,
    ConvergenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProtheusLibCoreModule,
    PoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
