import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPagePageRoutingModule } from './student-page-routing.module';

import { StudentPagePage } from './student-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPagePageRoutingModule
  ],
  declarations: [StudentPagePage]
})
export class StudentPagePageModule {}
