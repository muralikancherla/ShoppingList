import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { RecipeEditComponent } from './receipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './receipe/recipe-start/recipe-start.component';
import { recipesResolverService } from './receipe/recipes-resolver.service';
import { ShoppingComponent } from './shopping/shopping.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: ReceipeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: ReceipeDetailComponent,
        resolve: [recipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [recipesResolverService],
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingComponent,
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  //   imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
