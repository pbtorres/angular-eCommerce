import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    phone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    message: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder,
    private snakBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  sendForm() {
    this.snakBar.open("Formulário enviado com sucesso!", "Ok", {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "center"
    });
    this.contactForm.reset();
  }

}
