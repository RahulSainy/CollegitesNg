import { Component, OnDestroy, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs';
import { UIservice } from 'src/app/Shared/ui.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit ,OnDestroy{
  private loadingSubs!: Subscription;
  isLoading = false;
 
  constructor(private authService: AuthService,private uiService:UIservice) {}

  ngOnInit(): void {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
  onSubmit(form: NgForm) {
    console.log(form)
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
    })
  }
  ngOnDestroy(): void {
    if (this.loadingSubs){

      this.loadingSubs.unsubscribe();
    }
  }
}
