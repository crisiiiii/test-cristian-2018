import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FightersService } from './services/fighters.service';

import { AppComponent } from './app.component';
import { ChampionsListComponent } from './modules/champions-list/champions-list.component';
import { EditFightersComponent } from './modules/edit-fighters/edit-fighters.component';
import { AddFightersComponent } from './modules/add-fighters/add-fighters.component';
import { FighterFormComponent } from './components/fighter-form.component';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ChampionsListComponent,
    EditFightersComponent,
    AddFightersComponent,
    FighterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [FightersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
