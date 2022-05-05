import { NgModule } from "@angular/core"
import { ServerModule } from "@angular/platform-server"

import { CoreModule } from "./core.module"
import { AppComponent } from "./components/app"

@NgModule({
  imports: [
    CoreModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
