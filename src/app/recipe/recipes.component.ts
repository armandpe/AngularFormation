import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.getRecipes();
  }

  constructor(private recipeService: RecipeService) {}

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      },
      () => console.error('Error occurs')
    );
  }

  delete(id: number) {
    this.recipes.splice(this.recipes.findIndex(x => x.id === id), 1);
  }
}
