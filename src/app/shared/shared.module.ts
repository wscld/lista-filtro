import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item-component/item/item.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    ItemComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DividerModule
  ],
  exports: [
    InputTextModule,
    CardModule,
    ItemComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class SharedModule { }
