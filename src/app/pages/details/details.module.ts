import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DetailsPage } from './containers/details/details.page';
import { DetailsGuard } from './services/details.guard';
import { DetailsEffects } from './state/details.effects';
import { detailsReducer } from './state/details.reducer';

const routes: Routes = [
  { path: '', component: DetailsPage, canActivate: [DetailsGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('details', detailsReducer),
    EffectsModule.forFeature([DetailsEffects]),
  ],
  declarations: [DetailsPage],
  providers: [DetailsGuard],
})
export class DetailsModule {}
