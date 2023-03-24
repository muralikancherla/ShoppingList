import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
})
export class ReceipeItemComponent implements OnInit {
  rece: Receipe;
  @Input('recElement') receipe: Receipe;
  @Output() receipeSelected = new EventEmitter<void>();
  @Input() index: number;

  constructor(private recipeService: RecipeService) {}
  ngOnInit() {}
}
