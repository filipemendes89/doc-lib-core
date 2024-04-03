import { Component } from '@angular/core'

import { PoMenuItem } from '@po-ui/ng-components'
import { ProAppConfigService, ProJsToAdvplService } from '@totvs/protheus-lib-core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'mensagemJS', action: this.click1.bind(this) },
    { label: 'ReceberProtheus', action: this.click2.bind(this) },
    { label: 'Fechar direto', action: this.click3.bind(this) },
    { label: 'Fechar Perguntando', action: this.click4.bind(this) }
  ];
  title = 'doc-lib-core';

  constructor(
    private proJsToAdvplService: ProJsToAdvplService,
    private proAppConfigService: ProAppConfigService
  ) {}

  click1(): void {
    this.proJsToAdvplService.jsToAdvpl('mensagemJavascript', 'Comando Javascript');
  }

  click2(): void {
    this.proJsToAdvplService.jsToAdvpl('receberProtheus', '');
  }

  click3(): void {
    this.proAppConfigService.callAppClose(true);
  }

  click4(): void {
    this.proAppConfigService.callAppClose(false);
  }

}
