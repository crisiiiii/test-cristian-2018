import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FightersService } from './services/fighters.service';

import { AppComponent } from './app.component';
import { ChampionsListComponent } from './modules/champions-list/champions-list.component';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ChampionsListComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [FightersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
