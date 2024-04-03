import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
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
