import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HomePage } from './home.page';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducer';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class HomeModule {}
