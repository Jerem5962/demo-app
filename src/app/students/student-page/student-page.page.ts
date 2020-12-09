import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.page.html',
  styleUrls: ['./student-page.page.scss'],
})
export class StudentPagePage implements OnInit {

  students: Student | null = null;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) 
  {
    
  }

  ngOnInit() {
    let studentId: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.students = this.studentService.findById(studentId);
  }

}
