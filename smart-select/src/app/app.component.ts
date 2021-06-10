import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //Creating source object with data about students
  srcObject = [{
    student: 'John',
    subject: 'Math',
    group : '1A',
    year: '1'
  },{
    student: 'Mark',
    subject: 'English',
    group : '1A',
    year: '1'
  },{
    student: 'Maria',
    subject: 'English',
    group : '1A',
    year: '1'
  },{
    student: 'Andrew',
    subject: 'English',
    group : '1A',
    year: '1'
  },{
    student: 'Alex',
    subject: 'English',
    group : '1A',
    year: '1'
  }]

  students = new FormControl();
  studentsList: any[] = this.srcObject.map(s => s.student)
  

  subjects = new FormControl();
  subjectsList: any[] = this.srcObject.map(s => s.subject)

  groups = new FormControl();
  groupsList: any[] = this.srcObject.map(s => s.group)

  ngOnInit(){
    //Removing duplicate values in Lists
    this.studentsList = [...new Set(this.studentsList)];
    this.subjectsList = [...new Set(this.subjectsList)];
    this.groupsList = [...new Set(this.groupsList)];
  }
}
