import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected  = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://smokeystavern.com/wp-content/uploads/2018/03/osemary-grilled-salmon.jpg'),
    new Recipe('2 Test Recipe', 'This is second test', 'https://smokeystavern.com/wp-content/uploads/2018/03/osemary-grilled-salmon.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
