import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email='';
  pswd='';


   //login model
   loginForm =this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  emailChange(event:any)
  {
    console.log(event);
    this.email=event.target.value;
    console.log(this.email);
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }

  login(){
    // alert('login clicked');
    var email=this.loginForm.value.email;
    var pswd=this.loginForm.value.pswd;
    var userDetailes=this.ds.userDetailes;
    const result=this.ds.login(email,pswd)
    if(result){
      alert('Login successful');
      this.router.navigateByUrl('dashboard')
    }
    else{
      alert('Login failed')
    }

  }
  



}
