import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log(form);
    this.authService.login({
email: form.value.login,
password: form.value.password
    });
  }
}
