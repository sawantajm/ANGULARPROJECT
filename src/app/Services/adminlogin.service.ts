import { HttpClient } from '@angular/common/http';

import{Injectable} from '@angular/core'

import { Router } from '@angular/router';
@Injectable({providedIn:"root"})
export class LoginService
{
    constructor(private http:HttpClient,private userrouter:Router )
    {

    }
    readonly uri = "http://localhost:21332/api/Admin/AdminLogin";
     
  

    // checking Admin  login  creditals from webapi
    AdminLogin(user:any)
    {
        debugger;
    return  this.http.post(this.uri,user,{responseType :'text'});
    
    }

}