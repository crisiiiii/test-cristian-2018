import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsListComponent } from './modules/champions-list/champions-list.component'

export const routes: Routes = [
  { path: 'champions-list', component: ChampionsListComponent },
  // { path: 'edit-fighters', component: EditFighters }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
