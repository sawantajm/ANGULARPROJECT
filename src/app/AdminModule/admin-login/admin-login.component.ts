import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/adminlogin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginform: any;
  constructor(private fb:FormBuilder,private loginservice:LoginService,private router:Router,private service1:LoginService) { }
 
  ngOnInit(): void {
   // console.log(" Admin login page call");
   this.loginform = this.fb.group(
    {
      Email:['',[Validators.required,Validators.email]],
      
      Password: ['',[Validators.required,Validators.minLength(6)]]

    }
  );
   
  }

  
 

  get Email()
  {
    return this.loginform.get('Email');
  }
  get Password()
  {
    return this.loginform.get('Password');
  }
  


  loginuservariable?:boolean;

  loggedinempdetails:any={};

  err:any;
  dologin()
  {
    
     if(this.loginform!= null)
    {
      debugger;
       this.loginservice.AdminLogin(this.loginform.value).subscribe((data)=>{
        this.loggedinempdetails=data as unknown as JSON;
        debugger;
       
        sessionStorage.setItem("User",this.Email.value);
        const user = sessionStorage.getItem("User");
         if(data!='Invalid')
         {
           debugger;
      
        window.alert("Login Successfull");
          this.router.navigate(['/adminprofile']);
         }

       }, (error:HttpErrorResponse) => {                              //Error callback
       
        if(error.status===401)
        {
          this.err="Invalid Email or Password"; 
          this.router.navigate(['/admin']);
        }
      });


    }
    }
     
 

}


  

  



