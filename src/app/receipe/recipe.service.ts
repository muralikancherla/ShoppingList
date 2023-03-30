import { Injectable } from '@angular/core';
import { Receipe } from './receipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Receipe[]>();

  private receipeElements: Receipe[] = [
    new Receipe(
      'Blueberry Crisp',
      'This is simply a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/12/Prune-Bread-Pudding-3-1-720x960.jpg',
      [new Ingredient('Blueberries', 50), new Ingredient('Brown Sugar', 1)]
    ),
    new Receipe(
      'Spaghetti',
      'This is simply a test',
      'https://www.marionskitchen.com/wp-content/uploads/2022/12/Filipino-Spaghetti-02.jpg',
      [new Ingredient('Spaghetti', 1), new Ingredient('Tomatoes', 2)]
    ),
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.receipeElements.slice();
  }

  getRecipe(id: number) {
    return this.receipeElements[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Receipe) {
    this.receipeElements.push(recipe);
    this.recipesChanged.next(this.receipeElements.slice());
  }

  updateRecipe(index: number, newRecipe: Receipe) {
    this.receipeElements[index] = newRecipe;
    this.recipesChanged.next(this.receipeElements.slice());
  }

  deleteRecipe(index: number) {
    this.receipeElements.splice(index, 1);
    this.recipesChanged.next(this.receipeElements.slice());
  }
}
