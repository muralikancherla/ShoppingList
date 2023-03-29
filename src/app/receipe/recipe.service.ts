import { Injectable } from '@angular/core';
import { Receipe } from './receipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  private receipeElements: Receipe[] = [
    new Receipe(
      'A Test Receipe',
      'This is simply a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/12/Prune-Bread-Pudding-3-1-720x960.jpg',
      [new Ingredient('Meat', 5), new Ingredient('French Fries', 25)]
    ),
    new Receipe(
      'Another Test Receipe',
      'This is simply a test',
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/12/Prune-Bread-Pudding-3-1-720x960.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]
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
}
