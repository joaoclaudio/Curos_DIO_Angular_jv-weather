import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
  ],
  exports: [
    LoaderComponent, DetailedWeatherComponent,
  ]
})
export class ComponentsModule {
}
