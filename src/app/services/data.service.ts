import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  //database

  userDetailes: any={
    "john@123": {email:"john@123",username:"john",password:1000},
    "paul@123": {email:"paul@123",username:"paul",password:1001}
  }


register(email:any,username:any,password:any){
  let userDetailes=this.userDetailes;
  

  if(email in userDetailes){
    return false;

  }
  else{
    userDetailes[email]={
      email:email,
      username,
      password:password
    }
    console.log(userDetailes);
    return true;
    
  }
}

login(email:any,pswd:any){


  let userDetailes=this.userDetailes;
  if(email in userDetailes){
        if(pswd==userDetailes[email]['password']){
           return true;
        }
        else{
          return false;
        }
  }
  else{
    return false
  }

}


}
