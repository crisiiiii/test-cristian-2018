import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FightersService } from './services/fighters.service';

import { AppComponent } from './app.component';
import { ChampionsListComponent } from './modules/champions-list/champions-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionsListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [FightersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
