import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { QuestionDetails } from "../Model/QuestionDeails";




@Injectable()


export class charpleveiiExamService{
   
    
    constructor(private http:HttpClient){

        
    }

 readonly urllevel2="http://localhost:21332/api/CSharpExam/csharp2";



    getcsharpQuetion()
    {
       return this.http.get(this.urllevel2);
    }
    sendcsharpanswere(response:any)
    {
        debugger;
        return this.http.post(this.urllevel2,response,{responseType: 'text'});
    }
}