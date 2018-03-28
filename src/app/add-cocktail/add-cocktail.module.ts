import { NgModule } from '@angular/core';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { AddCocktailComponent } from './add-cocktail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, CustomMaterialModule, FormsModule],
  declarations: [AddCocktailComponent]
})
export class AddCocktailModule {}
