import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { searchstudent } from 'src/app/Model/SearchStudent.model';
import { SearchStudentService } from 'src/app/Services/searchstudent.service';


@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {




  constructor(private searchsudent: SearchStudentService, private fb: FormBuilder) {


  }








  ngOnInit(): void {

  }
  searchstudent = this.fb.group({
    SubjectName: ['',[Validators.required]],
    State: ['',[Validators.required]],
    City: ['',[Validators.required]],
    LevelName: ['',[Validators.required]],

    MarksObtained: ['',[Validators.required]]



  });



  get SubjectName() {
    return this.searchstudent.get('SubjectName');
  }
  get State() {
    return this.searchstudent.get('State');
  }
  get City() {
    return this.searchstudent.get('City');
  }
  get LevelName() {
    return this.searchstudent.get('LevelName');
  }
  get MarksObtained() {
    return this.searchstudent.get('MarksObtained');
  }

  stud: any;
  DisplayStudent() {
    debugger;
    const request = {
      subjectName: this.searchstudent.value.SubjectName,
      state: this.searchstudent.value.State,
      city: this.searchstudent.value.City,
      marksObtained: this.searchstudent.value.MarksObtained,
      levelName: this.searchstudent.value.LevelName
    }

    this.searchsudent.searchStudent(request).subscribe((data) => { 
      this.stud = data; 
      console.table(this.stud) });
    console.log(this.stud);
  }
  /*
    info:any;
    getdata()
    {
      this.searchsudent.getinfo().subscribe((data)=>{this.info=data; console.table(this.info)})
    }*/

}
