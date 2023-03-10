import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css'],
  providers: [RecipeService]
})
export class ReceipeComponent implements OnInit{
  selectedReceipe: Receipe;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.receipeSelected.subscribe(
      (receipe: Receipe) => {
        this.selectedReceipe = receipe;
      }
    );
  }

}
