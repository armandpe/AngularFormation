import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCocktailComponent } from './add-cocktail/add-cocktail.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipe/recipes.component';

const routes: Routes = [
  {
    path: 'recipes/add',
    component: AddCocktailComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
