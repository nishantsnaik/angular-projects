import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected  = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Biryani',
      'Hyderabadi rice dish',
      'https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Rice', 1),
        new Ingredient('Onions', 2),
      ]),
    new Recipe('Pav Bhaji',
      'Mumbai street food',
      'https://hebbarskitchen.com/wp-content/uploads/2016/12/pav-bhaji-recipe-in-cooker-quick-easy-pav-bhaji-recipe-16-769x1024.jpeg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Onions', 3)
        ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

}
