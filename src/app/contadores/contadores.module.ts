import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponet } from './contador/contador.componet';



@NgModule({
  declarations: [
    ContadorComponet
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorComponet
  ]
})
export class ContadoresModule { }
