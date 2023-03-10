import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

  receipeElements: Receipe[];

constructor(private recipeService: RecipeService){}

ngOnInit(){
  this.receipeElements = this.recipeService.getRecipes();
}


}
