import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsListComponent } from './modules/champions-list/champions-list.component';
import { EditFightersComponent } from './modules/edit-fighters/edit-fighters.component';
import { AddFightersComponent } from './modules/add-fighters/add-fighters.component';

export const routes: Routes = [
  { path: '', redirectTo: 'champions-list', pathMatch: 'full' },
  { path: 'champions-list', component: ChampionsListComponent },
  { path: 'edit-fighters', component: EditFightersComponent },
  { path: 'add-fighters', component: AddFightersComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
