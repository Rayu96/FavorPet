import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.validatorService.emailRegexValidation),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  //Getter for email validation
  get emailErrorMsg(): string {
    const errors = this.loginForm.get('email')?.errors;
    if (errors?.['required']) {
      return 'El email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El formato de email es incorrecto';
    }
    return '';
  }

  //Getter for password validation
  get passwordErrorMsg(): string {
    const errors = this.loginForm.get('password')?.errors;
    if (errors?.['required']) {
      return 'La contraseña es obligatoria';
    } else if (errors?.['minlength']) {
      return 'La contraseña debe ser de al menos 6 caracteres';
    }
    return '';
  }

  constructor(private validatorService: ValidatorService) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
