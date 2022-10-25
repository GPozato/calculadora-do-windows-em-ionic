import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Calc2PageRoutingModule } from './calc2-routing.module';

import { Calc2Page } from './calc2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Calc2PageRoutingModule
  ],
  declarations: [Calc2Page]
})
export class Calc2PageModule {}
