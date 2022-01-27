import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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


export class SignupComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit(form : NgForm){
    console.log(form);
  }
}
