import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css'],
  providers: [RecipeService],
})
export class ReceipeComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
}
