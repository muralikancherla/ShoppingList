import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { RecipeEditComponent } from './receipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './receipe/recipe-start/recipe-start.component';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: ReceipeComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: ReceipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingComponent,
  },
];

@NgModule({
  //   imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
