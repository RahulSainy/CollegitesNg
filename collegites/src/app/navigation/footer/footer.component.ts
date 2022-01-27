import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name = 'A User name ';
  constructor() { }

  ngOnInit(): void {
  }


onSubmit(form : NgForm){
  console.log(form);
}
}
