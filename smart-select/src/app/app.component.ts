import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core/option';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //Creating source object with data about students
  firstSrcObject: any[] = [{
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
  },{
    student: 'Kate',
    subject: 'Math',
    group : '2A',
    year: '2'
  },{
    student: 'Ivan',
    subject: 'Math',
    group : '2A',
    year: '2'
  }]

  srcObject: any[] = [];

  students = new FormControl();
  studentsList: any[] = [];
  

  subjects = new FormControl();
  subjectsList: any[] = [];
 
  groups = new FormControl();
  groupsList: any[] = [];

  years = new FormControl();
  yearsList: any[] = [];


  ngOnInit(){

    this.fillLists();
    this.removeDuplicatesFromLists();
  }

  fillLists(){

    this.srcObject = this.firstSrcObject;
    this.studentsList = this.srcObject.map(s => s.student);
    this.subjectsList = this.srcObject.map(s => s.subject)
    this.groupsList = this.srcObject.map(s => s.group)
  }
  removeDuplicatesFromLists(){
    this.studentsList = [...new Set(this.studentsList)];
    this.subjectsList = [...new Set(this.subjectsList)];
    this.groupsList = [...new Set(this.groupsList)];
    this.yearsList = [...new Set(this.yearsList)]; 
  }

  selectAllValues(){
   
  }

  flexibleSelect(array :any[], item:string){
    this.srcObject = [];
    this.firstSrcObject.forEach(data => {
      array.forEach(element => {
        switch(item) { 
          case "students": { 
              if(data.student == element) {
                this.srcObject.push(data)
              }
             break; 
          } 
          case "subjects": { 
            if(data.subject == element) {
              this.srcObject.push(data)
            }
             break; 
          } 
          case "groups": {
            if(data.group == element) {
              this.srcObject.push(data)
            }
             break;    
          }
          case "years": {
            if(data.year == element) {
              this.srcObject.push(data)
            }
             break;    
          } 
       }
      })
    })
  }

  selectStudentItem(event : MatSelectChange){

    if (event.value == "") {
      this.fillLists();
    }
    else{
      this.flexibleSelect(event.value , 'students');
      console.log(this.srcObject)
      this.subjectsList = this.srcObject.map(s => s.subject)
      this.groupsList = this.srcObject.map(s => s.group)
      this.yearsList = this.srcObject.map(s => s.year) 
    }
    this.removeDuplicatesFromLists();
  }
 
  selectSubjectItem(event : MatSelectChange){

    if (event.value == "") {
      this.fillLists();
    }
    else{
      this.flexibleSelect(event.value,  'subjects');
      this.studentsList = this.srcObject.map(s => s.student)
      this.groupsList= this.srcObject.map(s => s.group)
      this.yearsList = this.srcObject.map(s => s.year) 
    }
    this.removeDuplicatesFromLists();

  }

  selectGroupItem(event : MatSelectChange){
    if (event.value == "") {
      this.fillLists();
    }
    else{
      this.flexibleSelect(event.value, 'groups');
      this.subjectsList = this.srcObject.map(s => s.subject)
      this.studentsList = this.srcObject.map(s => s.student)
      this.yearsList = this.srcObject.map(s => s.year) 
    }
    this.removeDuplicatesFromLists();
  }

  selectYearItem(event : MatSelectChange){
    if (event.value == "") {
      this.fillLists();
    }
    else{
      this.flexibleSelect(event.value, 'years');
      this.subjectsList = this.srcObject.map(s => s.subject)
      this.studentsList = this.srcObject.map(s => s.student)
      this.yearsList = this.srcObject.map(s => s.year) 
    }
    this.removeDuplicatesFromLists();
  }
}
