import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  usuario: number = 0;

  constructor(
    public route: Router,
  ){}

  Navigate(direccion: string){
    this.route.navigate([direccion]);
  }
  SaveData(form: any){
    console.log(form)
  }
  
}
