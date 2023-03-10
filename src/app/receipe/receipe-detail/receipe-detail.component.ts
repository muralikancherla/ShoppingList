import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent  implements OnInit {
  @Input() receipe: Receipe;

  constructor(private recipeService: RecipeService){}

  ngOnInit() {
    
  }

  onAddToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.receipe.ingredients)
  }

}
