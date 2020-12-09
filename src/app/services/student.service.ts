import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../Student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

const API = "http://localhost:3000/students";

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Student>(API);
  }

  findById(id: number) {
    
  }
}
