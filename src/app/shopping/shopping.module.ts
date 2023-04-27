import { NgModule } from '@angular/core';
import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ShoppingModule {}
