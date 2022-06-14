import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validator,FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: any;
  isSubmited:boolean=false;
    constructor(private builder:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
        "username":['',Validators.required],
        "password":['',Validators.required],
    })
  }
  get f(){ return this.registerForm.controls; }

  getCredential(){
    this.isSubmited=true;
    //console.log(this.registerForm.controls)
    if(this.registerForm.invalid)
    return;
    else{
      this.auth.checkLogin(this.registerForm.value).subscribe((data)=>{
        console.log(data);
        if(data.status==="success"){
          localStorage.setItem("token",data.token);

                //this.router.navigateByUrl("/dashboard");


                this.auth.getDashboardData().subscribe((response)=>{console.log(response)});

                
        }else
                alert(data.status)
      })
    }
  }

}
