import{ Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";
import { catchError } from "rxjs";



@Injectable()

export class DeleteQuestionService
{
    constructor(private http:HttpClient)
    {

    }

//for delete Question

readonly uri="http://localhost:21332/api/DeleteQuestion";



searchquestion(squestion:any)

{
    return this.http.post(this.uri,squestion,{ responseType: 'json' });
    
}



deleteQuestion(cid:number)
{
   return this.http.delete(this.uri+'/'+cid);
}


}