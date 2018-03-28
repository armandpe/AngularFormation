import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  imports: [
    CustomMaterialModule,
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule { }
