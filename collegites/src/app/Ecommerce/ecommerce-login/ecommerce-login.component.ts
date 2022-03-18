import { Component, OnInit } from '@angular/core';
import { EcommerceAuthService } from '../shared/services/ecommerce-auth.service';
// import * as firebase from 'firebase/compat';
@Component({
  selector: 'app-ecommerce-login',
  templateUrl: './ecommerce-login.component.html',
  styleUrls: ['./ecommerce-login.component.css'],
})
export class EcommerceLoginComponent implements OnInit {
  constructor(private auth: EcommerceAuthService ) {}

  ngOnInit(): void {}

  login() {
this.auth.login()
  }
}
