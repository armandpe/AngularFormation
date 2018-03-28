import { Injectable } from '@angular/core';
import { Recipe } from './model/recipe.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService {
  private recipeUrl = 'api/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`);
  }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

  deleteRecipe(id: Number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.recipeUrl}/${id}`);
  }

}
