import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [CommonModule, CustomMaterialModule , RouterModule],
  declarations: [RecipeComponent, RecipesComponent, RecipeDetailComponent]
})
export class RecipeModule {}
