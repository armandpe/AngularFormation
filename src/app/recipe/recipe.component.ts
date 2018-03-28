import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  @Input() recipe: Recipe;

  @Output() delete: EventEmitter<Number> = new EventEmitter();

  constructor(private recipeService: RecipeService) {}

  deleted() {
    this.recipeService.deleteRecipe(this.recipe.id).subscribe(() => this.delete.emit(this.recipe.id), () => alert('delete failed'));
  }

}
