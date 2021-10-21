import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, ReactiveFormsModule],
})
export class HomeModule {}
