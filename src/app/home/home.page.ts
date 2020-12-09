import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TestComponent } from '../components/test/test.component';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';

interface Student {
  id: number;
  name: string;
  grade: number;
  isProjectDone: boolean;
  comment: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numFastStudent: number;
  students: Student[] | null = null;

  message: string = "";

  
  constructor(
    private StudentService: StudentService,
    private PopoverCtrl: PopoverController,
    private route: ActivatedRoute
        ) {
    //this.numFastStudent = this.getDoneProject().length;
    this.students = this.StudentService.findAll();
  }

  onClick(index: number) {
    this.message = this.students[index].comment
  }

  onChange(event: any, index: number) {
    let checked = event.target.checked;
    //this.students[index].isProjectDone = checked;
    //this.numFastStudent = this.getDoneProject().length;
    console.log(this.numFastStudent);
  }

  async testPopover() {
    let popover = await this.PopoverCtrl.create({
      component: TestComponent,
    })
    await popover.present();
  }

  // Retourne les etudiants ayant terminés leur projet
  getDoneProject() {
    //return this.students.filter(student => student.isProjectDone === true);
  }


}
