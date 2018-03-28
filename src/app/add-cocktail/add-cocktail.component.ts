import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cocktail',
  templateUrl: './add-cocktail.component.html',
  styleUrls: ['./add-cocktail.component.scss']
})
export class AddCocktailComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.recipeService.addRecipe(this.recipe).subscribe(() => this.router.navigate(['/recipes']));
  }

}
