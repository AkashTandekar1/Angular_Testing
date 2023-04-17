import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.css'],
})
export class TestingFormComponent implements OnInit {
  text:string = 'contact page';

  contactForm:FormGroup;

  contact = {
    name: '',
    email: '',
    text: '',
  };

  submitted:boolean = false;

  constructor() {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm(): void {
    this.contactForm = new FormGroup({
         "name": new FormControl(this.contact.name, [Validators.required,Validators.minLength(4)]),
         "email": new FormControl(this.contact.email, [Validators.required,Validators.email]),
         "text": new FormControl(this.contact.text, [Validators.required])
     })
    }

    onSubmit(): void {
     this.submitted = true;
    }
}
