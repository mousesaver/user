import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form!:FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}
  get name() {
    return this.form.get('name');
  }
  get message() {
    return this.form.get('message');
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }
  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
    }
  }
}
