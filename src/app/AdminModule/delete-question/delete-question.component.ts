import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionDetails } from 'src/app/Model/QuestionDeails';
import { DeleteQuestionService } from 'src/app/Services/deletequestion.service';


@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  constructor(private delque:DeleteQuestionService,private fb: FormBuilder,private  router:Router) { }



  ngOnInit(): void {
  }

  Deleteform= this.fb.group({
    SubjectName: ['',],
    
    LevelName: ['',]
  });



  get SubjectName() {
    return this.Deleteform.get('SubjectName');
  }

  get LevelName() {
    return this.Deleteform.get('LevelName');
  }
 


err:any;
  result:any;
doclick()
{
  const request = {
    subjectName: this.Deleteform.value.SubjectName,
   
    levelName: this.Deleteform.value.LevelName
  }

  debugger;
  this.delque.searchquestion(request).subscribe((data)=>{this.result=data;console.table(this.result)
   if(data=="please select Both")
   {

 
     window.alert("Please Select Technology and level");
     this.router.navigate(['/deletequetion']);
   }
   else if(data==null)

   {
     window.alert("select both Field ");
     this.router.navigate(['/deletequetion']);
   }
  else if(data=="Try again")
  {

    window.alert("Try Again");
    this.router.navigate(['/deletequetion']);
  }
  
  });

}



  msg:any;
  removequestion(cid:number)
  {
  this.delque.deleteQuestion(cid).subscribe((data)=>{this.msg=data,console.log(this.msg)
  if(data=="record Deleted")
  {
    window.alert("Record deleted");

  }
    
  });
  
 
  this.doclick();
  
  }


}
