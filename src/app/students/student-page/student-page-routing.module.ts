import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPagePage } from './student-page.page';

const routes: Routes = [
  {
    path: '/students',
    component: StudentPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPagePageRoutingModule {}
