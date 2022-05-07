import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { distinct } from 'rxjs';
import { QuestionDetails } from 'src/app/Model/QuestionDeails';
import { AddQuesionService } from 'src/app/Services/addquestion.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  constructor(private fb:FormBuilder,private   addq:AddQuesionService,private router:Router) { }


levelinfo:any=[];

  ngOnInit(): void {
    //this.GetQuestion();
   //this.getlevel()
    
  }

  
qdata:QuestionDetails={};

   AddQuestion=this.fb.group(
    {
      LevelId:['',[Validators.required]],
      SubjectId:['',[Validators.required]],
    question:['',[Validators.required]],
    
    option1:['',[Validators.required]],
    
    option2:['',[Validators.required]],
    option3:['',[Validators.required]],
    option4:['',[Validators.required]],
    correctanswers:['',[Validators.required]],
    
    });
    

   get LevelId()
    {
     return this.AddQuestion.get('LevelId');
    }
    get SubjectId()
    {
      return this.AddQuestion.get('SubjectId');
      
    }
    get question()
    {
      return this.AddQuestion.get('question');
    }
    get option1()
    {
      return this.AddQuestion.get('option1');
    }
    get option2()
    {
      return this.AddQuestion.get('option2');
    }
   
    get correctanswers()
    {
      return this.AddQuestion.get('correctanswers');
    }
/*
recordinfo:any=[];
GetQuestion()
{
this.addq.getquestion().subscribe((data)=>{this.recordinfo=data, console.table(this.recordinfo)});
}
*/

result:any;
Addquestion()
{ 

  console.log(this.AddQuestion.value);
  
  this.addq.InsertRecord(this.AddQuestion.value).subscribe((data)=>{this.result=data,console.log(this. result)
  
    if(data=='Data Inserted')
    {
     
   
      window.alert("Question Added");
     this.router.navigate(['/Addquestion']);
     
    }
    else{
      window.alert("Try Again");
    }

  
  
  });


    
}

}
