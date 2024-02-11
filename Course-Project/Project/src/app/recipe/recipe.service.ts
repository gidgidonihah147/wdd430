import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Double Decker Hamburger',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uNPEoHkwibPyJHmy8Z8hyNuodzblNqkSiw&usqp=CAU',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Hamburger Patty', 2),
        new Ingredient('Pickles', 3),
        new Ingredient('Mustard', 3),
      ]
    ),
    new Recipe(
      'Tripple Decker Hamburger',
      'This is the second test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uNPEoHkwibPyJHmy8Z8hyNuodzblNqkSiw&usqp=CAU',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Hamburger Patty', 3),
        new Ingredient('Pickles', 5),
        new Ingredient('Mustard', 4),
      ]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
