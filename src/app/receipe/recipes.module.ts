import { NgModule } from '@angular/core';
import { ReceipeComponent } from './receipe.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipe-list/receipe-item/receipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ReceipeComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],
})
export class RecipesModule {}
