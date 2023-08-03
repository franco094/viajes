import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 form:FormGroup; 
 
 constructor(private fb:FormBuilder,private router:Router,private _snackBar:MatSnackBar){
  this.form=this.fb.group({
    mail:['',Validators.required],
    contraseña:['',Validators.required]
  })
 }
  ngOnInit(): void {
  }

 ingresar(){
  const mail=this.form.value.mail;
  const contraseña=this.form.value.contraseña;
  
  if (mail=="frnkkofvno@gmail.com" && contraseña=="12345678")  {
    this.router.navigate(["/dashboard"]);
  } else {
    this.error();
    this.form.reset();
    
  }
 }
 error(){
  this._snackBar.open('la contraseña es incorrecta','',{
    duration:5000, horizontalPosition:'center',verticalPosition:'top'
  })
 }
}
