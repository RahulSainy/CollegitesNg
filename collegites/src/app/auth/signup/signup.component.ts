import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UIservice } from 'src/app/Shared/ui.service';
import { AuthService } from '../auth.service';
import { TermsComponent } from '../terms.component';

interface Branch {
  value: string;
  viewValue: string;
}
interface Sems {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit , OnDestroy {
isLoading = false;
  private loadingSubs: Subscription;


  branchs: Branch[] = [
    {value: 'AU', viewValue: 'AU'},
    {value: 'CE', viewValue: 'CE'},
    {value: 'CS', viewValue: 'CS'},
    {value: 'CSBS', viewValue: 'CSBS'},
    {value: 'CSDS', viewValue: 'CSDS'},
    {value: 'AIML', viewValue: 'AIML'},
    {value: 'EC', viewValue: 'EC'},
    {value: 'EX', viewValue: 'EX'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'ME', viewValue: 'ME'},

  ];

  sems: Sems[] = [
    {value: '1st', viewValue: '1st'},
    {value: '2nd', viewValue: '2nd'},
    {value: '3rd', viewValue: '3rd'},
    {value: '4th', viewValue: '4th'},
    {value: '5th', viewValue: '5th'},
    {value: '6th', viewValue: '6th'},
    {value: '7th', viewValue: '7th'},
    {value: '8th', viewValue: '8th'},
  ];

  constructor(private dialog:MatDialog,
    private authService :AuthService, private uiService: UIservice,
   ) { }

  ngOnInit(): void {
    
  }
  onSubmit(form : NgForm){
    console.log(form);
    this.authService.registerUser({
      email : form.value.email,
      password: form.value.password

    })
  }
  onAgree(){
    this.dialog.open(TermsComponent);
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    })
  }

  ngOnDestroy(): void {
    if (this.loadingSubs){

      this.loadingSubs.unsubscribe();
    }
  }
}
